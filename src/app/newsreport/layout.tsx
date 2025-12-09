import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Reports | The Legal Chambers",
  description: "Coverage of The Legal Chambers in national media and updates on regulatory developments.",
  keywords: "legal news, law firm news, regulatory updates, legal media coverage, legal press",
  alternates: {
    canonical: "https://www.thelegalchambers.org/newsreport",
  },
  openGraph: {
    title: "News Reports | The Legal Chambers",
    description: "Coverage of The Legal Chambers in national media and updates on regulatory developments.",
    url: "https://www.thelegalchambers.org/newsreport",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "News Reports - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News Reports | The Legal Chambers",
    description: "Coverage of The Legal Chambers in national media and updates on regulatory developments.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function NewsReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

