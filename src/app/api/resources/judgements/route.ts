import { NextResponse } from "next/server";
import { client, isSanityConfigured } from "@/sanity/lib/client";

// Disable caching to ensure real-time updates
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  if (!isSanityConfigured()) {
    return NextResponse.json(
      { 
        error: "Sanity CMS is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your .env.local file.",
        items: [] 
      },
      { status: 503 }
    );
  }

  try {
    const judgements = await client.fetch(
      `*[_type == "judgement"] | order(judgementDate desc) {
        _id,
        title,
        summary,
        link,
        court,
        caseNumber,
        judgementDate,
        featured
      }`,
      {},
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );
    
    const response = NextResponse.json(judgements || []);
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    
    return response;
  } catch (error) {
    console.error("Error fetching judgements:", error);
    return NextResponse.json({ error: "Failed to fetch judgements", items: [] }, { status: 500 });
  }
}

