import { notFound } from "next/navigation";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { PortableText } from "@portabletext/react";
import ShareButton from "@/components/ShareButton";

type MediaPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

async function getMediaItem(id: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const media = await client.fetch(
      `*[_type == "media" && _id == $id][0] {
        _id,
        title,
        summary,
        link,
        image,
        images,
        mediaType,
        publishedAt,
        featured
      }`,
      { id }
    );
    return media;
  } catch (error) {
    console.error("Error fetching media:", error);
    return null;
  }
}

export default async function MediaDetailPage({ params, searchParams }: MediaPageProps) {
  const { id } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  void resolvedSearchParams;
  const media = await getMediaItem(id);

  if (!media) {
    notFound();
  }

  // Support both images array and single image field for backward compatibility
  const imageUrls: string[] = [];
  if (media.images && Array.isArray(media.images) && media.images.length > 0) {
    media.images.forEach((img: any) => {
      if (img) {
        const url = urlFor(img).width(1200).height(600).url();
        if (url) imageUrls.push(url);
      }
    });
  } else if (media.image) {
    // Fallback to single image field for backward compatibility
    const url = urlFor(media.image).width(1200).height(600).url();
    if (url) imageUrls.push(url);
  }

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": media.title,
    "description": media.summary,
    "datePublished": media.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "The Legal Chambers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thelegalchambers.org/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.thelegalchambers.org/resources/media/${id}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
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
              {media.mediaType ? media.mediaType.charAt(0).toUpperCase() + media.mediaType.slice(1) : "Media"}
            </div>
            <ShareButton url={`/resources/media/${id}`} title={media.title} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-4">{media.title}</h1>
          {media.publishedAt && (
            <div className="flex items-center gap-2 text-[#3C2A21]/70">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(media.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        {/* Images */}
        {imageUrls.length > 0 && (
          <div className="mb-8 space-y-6">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={imageUrl}
                  alt={`${media.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-[#3C2A21]">{media.summary}</p>
        </div>

        {/* External Link */}
        {media.link && (
          <div className="mt-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
            <a
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7B542F] hover:text-[#3C2A21] font-semibold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              {media.mediaType === "youtube" ? "Watch on YouTube" : 
               media.mediaType === "instagram" ? "View on Instagram" : 
               "View External Link"}
            </a>
          </div>
        )}
      </div>
    </main>
    </>
  );
}

