import { notFound } from "next/navigation";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { PortableText } from "@portabletext/react";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

async function getBlogPost(slug: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const blog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        summary,
        content[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          },
          markDefs[]{
            ...,
            _type == "link" => {
              ...,
              href
            }
          },
          children[]{
            ...,
            marks[],
            _type == "span" => {
              ...,
              marks[]
            }
          }
        },
        featuredImage,
        publishedAt,
        author,
        featured
      }`,
      { slug }
    );
    
    // Debug and ensure content is properly formatted
    if (blog && blog.content) {
      // Log content structure for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Blog content received:', {
          hasContent: !!blog.content,
          isArray: Array.isArray(blog.content),
          type: typeof blog.content,
          length: blog.content?.length,
          firstItem: blog.content?.[0],
          firstItemType: blog.content?.[0]?._type,
          firstItemKeys: blog.content?.[0] ? Object.keys(blog.content[0]) : []
        });
      }
      
      // Ensure content is always an array for PortableText
      if (!Array.isArray(blog.content)) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Blog content is not an array, converting:', blog.content);
        }
        blog.content = [];
      }
      
      // If content array has only 1 item and it's an object with children/items, it might be nested incorrectly
      if (blog.content.length === 1 && blog.content[0] && typeof blog.content[0] === 'object') {
        const firstItem = blog.content[0];
        // Check if this single item contains the actual content array
        if (firstItem.children && Array.isArray(firstItem.children)) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Found nested content structure, flattening...');
          }
          // The content might be nested - use the children array
          blog.content = firstItem.children;
        } else if (firstItem.items && Array.isArray(firstItem.items)) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Found items array, using it as content...');
          }
          blog.content = firstItem.items;
        }
      }
    }
    
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

const portableTextComponents = {
  types: {
    block: ({ value, children }: any) => {
      if (!value) return null;
      const { style, listItem } = value;
      
      // Handle list items within blocks
      if (listItem === "bullet") {
        return <li className="text-[#3C2A21] leading-relaxed mb-2 ml-4">{children}</li>;
      }
      if (listItem === "number") {
        return <li className="text-[#3C2A21] leading-relaxed mb-2 ml-4">{children}</li>;
      }
      
      // Handle headings
      if (style === "h1") {
        return <h1 className="text-3xl font-bold text-[#7B542F] mt-10 mb-6">{children}</h1>;
      }
      if (style === "h2") {
        return <h2 className="text-2xl font-bold text-[#7B542F] mt-8 mb-4">{children}</h2>;
      }
      if (style === "h3") {
        return <h3 className="text-xl font-semibold text-[#7B542F] mt-6 mb-3">{children}</h3>;
      }
      if (style === "h4") {
        return <h4 className="text-lg font-semibold text-[#7B542F] mt-4 mb-2">{children}</h4>;
      }
      if (style === "blockquote") {
        return <blockquote className="border-l-4 border-[#7B542F] pl-4 italic my-4 text-[#3C2A21]/80">{children}</blockquote>;
      }
      
      // Default paragraph
      return <p className="mb-4 text-[#3C2A21] leading-relaxed">{children}</p>;
    },
    span: ({ children }: any) => {
      // Handle inline spans (text nodes within blocks)
      return <span>{children}</span>;
    },
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      try {
        const imageUrl = urlFor(value).width(800).url();
        return (
          <div className="my-8 rounded-lg overflow-hidden">
            <img src={imageUrl} alt={value.alt || "Blog image"} className="w-full h-auto" />
          </div>
        );
      } catch (error) {
        console.error("Error rendering image:", error);
        return null;
      }
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-4 ml-6 list-disc space-y-1 text-[#3C2A21]">{children}</ul>,
    number: ({ children }: any) => <ol className="mb-4 ml-6 list-decimal space-y-1 text-[#3C2A21]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-[#3C2A21] leading-relaxed mb-1">{children}</li>,
    number: ({ children }: any) => <li className="text-[#3C2A21] leading-relaxed mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-[#3C2A21]">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-[#EFE9E3] px-2 py-1 rounded text-sm font-mono text-[#3C2A21]">{children}</code>,
    link: ({ value, children }: any) => {
      if (!value?.href) return <>{children}</>;
      const target = (value.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#7B542F] hover:text-[#3C2A21] underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  void resolvedSearchParams;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = blog.featuredImage ? urlFor(blog.featuredImage).width(1200).height(600).url() : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-[#7B542F] hover:text-[#3C2A21] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EFE9E3] text-[#7B542F] text-sm font-semibold mb-4">
            Blog Post
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-4">{blog.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[#3C2A21]/70">
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {blog.author}</span>
              </div>
            )}
            {blog.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {imageUrl && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Summary */}
        <div className="mb-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
          <p className="text-lg leading-relaxed text-[#3C2A21]">{blog.summary}</p>
        </div>

        {/* Content */}
        {blog.content && Array.isArray(blog.content) && blog.content.length > 0 ? (
          <article className="mb-8">
            <div className="prose prose-lg max-w-none text-[#3C2A21]">
              <PortableText value={blog.content} components={portableTextComponents} />
            </div>
          </article>
        ) : blog.content ? (
          <div className="mb-8 p-6 rounded-xl bg-yellow-50 border-2 border-yellow-300">
            <p className="text-yellow-800 font-semibold mb-2">⚠️ Content Debug Info:</p>
            <p className="text-yellow-700 text-sm mb-2">
              Content exists: Yes
            </p>
            <p className="text-yellow-700 text-sm mb-2">
              Content type: {typeof blog.content}
            </p>
            <p className="text-yellow-700 text-sm mb-2">
              Is Array: {Array.isArray(blog.content) ? 'Yes' : 'No'}
            </p>
            <p className="text-yellow-700 text-sm mb-2">
              Length: {Array.isArray(blog.content) ? blog.content.length : 'N/A'}
            </p>
            {blog.content && typeof blog.content === 'object' && (
              <details className="mt-4">
                <summary className="text-yellow-700 text-sm cursor-pointer font-semibold">
                  View Raw Content Structure (Click to expand)
                </summary>
                <pre className="text-xs bg-yellow-100 p-4 rounded mt-2 overflow-auto max-h-96">
                  {JSON.stringify(blog.content, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ) : (
          <div className="mb-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
            <p className="text-[#3C2A21]/70">No content available for this blog post.</p>
          </div>
        )}
      </div>
    </main>
  );
}

