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
    const blogs = await client.fetch(
      `*[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        summary,
        "image": featuredImage,
        publishedAt,
        author,
        featured
      }`,
      {},
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );
    
    const response = NextResponse.json(blogs || []);
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    
    return response;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs", items: [] }, { status: 500 });
  }
}

