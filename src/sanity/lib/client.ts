import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Check if project ID is set
if (!projectId) {
  if (typeof window === "undefined") {
    // Server-side: log error
    console.error(
      "❌ ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in environment variables.\n" +
      "Please create a .env.local file in the root directory with:\n" +
      "NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here\n" +
      "NEXT_PUBLIC_SANITY_DATASET=production\n" +
      "ADMIN_PASSWORD=your_password_here\n\n" +
      "See README_CMS.md for setup instructions."
    );
  }
}

// Create client with placeholder if project ID is missing (to prevent runtime errors)
// The API routes will check for valid project ID before making queries
export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset,
  useCdn: true,
  apiVersion: "2024-01-01",
});

// Helper function to check if Sanity is configured
export function isSanityConfigured(): boolean {
  return !!projectId && projectId !== "missing-project-id";
}

