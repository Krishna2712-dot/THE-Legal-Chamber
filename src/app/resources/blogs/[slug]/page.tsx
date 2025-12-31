import { notFound } from "next/navigation";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { PortableText } from "@portabletext/react";
import ShareButton from "@/components/ShareButton";

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
        content[] {
          ...,
          _type == "image" => {
            ...,
            "asset": asset->
          }
        },
        featuredImage,
        publishedAt,
        author,
        featured
      }`,
      { slug },
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );
    
    
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

const portableTextComponents = {
  types: {
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
  block: {
    normal: ({ children }: any) => <p className="mb-4 text-[#3C2A21] leading-relaxed">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-[#7B542F] mt-10 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-[#7B542F] mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold text-[#7B542F] mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold text-[#7B542F] mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-[#7B542F] pl-4 italic my-4 text-[#3C2A21]/80">{children}</blockquote>,
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
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#EFE9E3] text-[#7B542F] text-sm font-semibold">
            Blog Post
            </div>
            <ShareButton url={`/resources/blogs/${slug}`} title={blog.title} />
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
        ) : (
          <div className="mb-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
            <p className="text-[#3C2A21]/70 italic">
              This blog post contains only the summary above. Full content will be added soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

