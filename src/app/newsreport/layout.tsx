import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal News & Reports | Delhi & Ghaziabad Law Firm Updates | The Legal Chambers",
  description: "Stay updated with legal news, regulatory developments, and media coverage from The Legal Chambers in Delhi & Ghaziabad. Latest updates on legal matters and law firm activities.",
  keywords: "legal news Delhi, law firm news Ghaziabad, regulatory updates Delhi NCR, legal media coverage, legal press Delhi, law firm updates",
  alternates: {
    canonical: "https://www.thelegalchambers.org/newsreport",
  },
  openGraph: {
    title: "Legal News & Reports | Delhi & Ghaziabad Law Firm Updates | The Legal Chambers",
    description: "Stay updated with legal news, regulatory developments, and media coverage from The Legal Chambers in Delhi & Ghaziabad.",
    url: "https://www.thelegalchambers.org/newsreport",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "News Reports - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal News & Reports | Delhi & Ghaziabad Law Firm Updates | The Legal Chambers",
    description: "Stay updated with legal news, regulatory developments, and media coverage from The Legal Chambers in Delhi & Ghaziabad.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
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

