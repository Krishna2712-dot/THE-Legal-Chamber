import { notFound } from "next/navigation";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import Link from "next/link";
import { ArrowLeft, Calendar, Scale } from "lucide-react";
import { PortableText } from "@portabletext/react";

interface JudgementPageProps {
  params: {
    id: string;
  };
}

async function getJudgement(id: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const judgement = await client.fetch(
      `*[_type == "judgement" && _id == $id][0] {
        _id,
        title,
        summary,
        link,
        content,
        court,
        caseNumber,
        judgementDate,
        featured
      }`,
      { id }
    );
    return judgement;
  } catch (error) {
    console.error("Error fetching judgement:", error);
    return null;
  }
}

const portableTextComponents = {
  types: {
    block: ({ value }: any) => {
      const { style, children } = value;
      if (style === "normal") {
        return <p className="mb-4 text-[#3C2A21] leading-relaxed">{children}</p>;
      }
      if (style === "h2") {
        return <h2 className="text-2xl font-bold text-[#7B542F] mt-8 mb-4">{children}</h2>;
      }
      if (style === "h3") {
        return <h3 className="text-xl font-semibold text-[#7B542F] mt-6 mb-3">{children}</h3>;
      }
      return <p className="mb-4 text-[#3C2A21] leading-relaxed">{children}</p>;
    },
  },
};

export default async function JudgementDetailPage({ params }: JudgementPageProps) {
  const judgement = await getJudgement(params.id);

  if (!judgement) {
    notFound();
  }

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
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-6 h-6 text-[#7B542F]" />
            <div className="inline-block px-3 py-1 rounded-full bg-[#EFE9E3] text-[#7B542F] text-sm font-semibold">
              {judgement.court ? judgement.court.charAt(0).toUpperCase() + judgement.court.slice(1) + " Court" : "Legal Judgement"}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-4">{judgement.title}</h1>
          
          {/* Case Details */}
          <div className="space-y-2 mb-4">
            {judgement.caseNumber && (
              <p className="text-[#3C2A21]/70">
                <span className="font-semibold">Case Number:</span> {judgement.caseNumber}
              </p>
            )}
            {judgement.judgementDate && (
              <div className="flex items-center gap-2 text-[#3C2A21]/70">
                <Calendar className="w-4 h-4" />
                <span>
                  <span className="font-semibold">Judgement Date:</span>{" "}
                  {new Date(judgement.judgementDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
          <h2 className="text-xl font-semibold text-[#7B542F] mb-3">Summary</h2>
          <p className="text-lg leading-relaxed text-[#3C2A21]">{judgement.summary}</p>
        </div>

        {/* Full Content */}
        {judgement.content && judgement.content.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#7B542F] mb-6">Full Judgement</h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={judgement.content} components={portableTextComponents} />
            </div>
          </div>
        )}

        {/* External Link */}
        {judgement.link && (
          <div className="mt-8 p-6 rounded-xl bg-[#EFE9E3] border border-[#C9B59C]/40">
            <a
              href={judgement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7B542F] hover:text-[#3C2A21] font-semibold transition-colors"
            >
              View Full Judgement Document
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

