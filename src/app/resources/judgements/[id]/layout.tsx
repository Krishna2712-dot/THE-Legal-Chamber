import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";

async function getJudgementMetadata(id: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const judgement = await client.fetch(
      `*[_type == "judgement" && _id == $id][0] {
        title,
        summary,
        judgementDate,
        court
      }`,
      { id }
    );
    return judgement;
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
  const judgement = await getJudgementMetadata(id);

  if (!judgement) {
    return {
      title: "Legal Judgement | The Legal Chambers",
      description: "Landmark legal judgements and case law from Delhi courts.",
    };
  }

  const title = `${judgement.title} | Legal Judgement | The Legal Chambers`;
  const description = judgement.summary
    ? judgement.summary.substring(0, 160)
    : "Landmark legal judgements and case law from Delhi courts.";

  return {
    title,
    description,
    keywords: "legal judgement Delhi, case law Ghaziabad, court decisions Delhi NCR, landmark cases",
    alternates: {
      canonical: `https://www.thelegalchambers.org/resources/judgements/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.thelegalchambers.org/resources/judgements/${id}`,
      siteName: "The Legal Chambers",
      images: [
        {
          url: "https://www.thelegalchambers.org/favicon.png",
          width: 512,
          height: 512,
          alt: judgement.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: judgement.judgementDate,
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

export default function JudgementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

