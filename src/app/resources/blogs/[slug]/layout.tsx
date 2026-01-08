import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";

async function getBlogMetadata(slug: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const blog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0] {
        title,
        summary,
        publishedAt,
        author
      }`,
      { slug }
    );
    return blog;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogMetadata(slug);

  if (!blog) {
    return {
      title: "Blog Post | The Legal Chambers",
      description: "Legal insights and thought leadership from expert lawyers in Delhi & Ghaziabad.",
    };
  }

  const title = `${blog.title} | Legal Blog | The Legal Chambers`;
  const description = blog.summary
    ? blog.summary.substring(0, 160)
    : "Legal insights and thought leadership from expert lawyers in Delhi & Ghaziabad.";

  return {
    title,
    description,
    keywords: "legal blog Delhi, law firm blog Ghaziabad, legal insights Delhi NCR, legal articles, law firm updates",
    alternates: {
      canonical: `https://www.thelegalchambers.org/resources/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.thelegalchambers.org/resources/blogs/${slug}`,
      siteName: "The Legal Chambers",
      images: [
        {
          url: "https://www.thelegalchambers.org/favicon.png",
          width: 512,
          height: 512,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      authors: blog.author ? [blog.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.thelegalchambers.org/favicon.png"],
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#7B542F",
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

