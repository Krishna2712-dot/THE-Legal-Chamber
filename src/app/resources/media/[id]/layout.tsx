import type { Metadata, Viewport } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";

async function getMediaMetadata(id: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const media = await client.fetch(
      `*[_type == "media" && _id == $id][0] {
        title,
        summary,
        publishedAt,
        mediaType
      }`,
      { id }
    );
    return media;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const media = await getMediaMetadata(id);

  if (!media) {
    return {
      title: "Media | The Legal Chambers",
      description: "Legal media content from expert lawyers in Delhi & Ghaziabad.",
    };
  }

  const title = `${media.title} | Legal Media | The Legal Chambers`;
  const description = media.summary
    ? media.summary.substring(0, 160)
    : "Legal media content from expert lawyers in Delhi & Ghaziabad.";

  return {
    title,
    description,
    keywords: "legal media Delhi, law firm media Ghaziabad, legal videos Delhi NCR, legal content",
    alternates: {
      canonical: `https://www.thelegalchambers.org/resources/media/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.thelegalchambers.org/resources/media/${id}`,
      siteName: "The Legal Chambers",
      images: [
        {
          url: "https://www.thelegalchambers.org/favicon.png",
          width: 512,
          height: 512,
          alt: media.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.thelegalchambers.org/favicon.png"],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B542F",
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

