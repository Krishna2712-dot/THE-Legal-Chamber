import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | The Legal Chambers",
  description: "Insights, updates & thought leadership. Stay informed with curated legal updates, case notes, and multimedia explainers created by The Legal Chambers.",
  keywords: "legal resources, legal blogs, case notes, legal judgements, legal news, legal insights, legal updates",
  alternates: {
    canonical: "https://www.thelegalchambers.org/resources",
  },
  openGraph: {
    title: "Resources | The Legal Chambers",
    description: "Insights, updates & thought leadership. Stay informed with curated legal updates, case notes, and multimedia explainers.",
    url: "https://www.thelegalchambers.org/resources",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Resources - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | The Legal Chambers",
    description: "Insights, updates & thought leadership. Stay informed with curated legal updates, case notes, and multimedia explainers.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

