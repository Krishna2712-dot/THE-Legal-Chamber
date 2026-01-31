import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Noted Judgements | Landmark Cases from Delhi Courts | The Legal Chambers",
  description: "Landmark legal judgements and precedent-setting cases handled by The Legal Chambers in Delhi & Ghaziabad. Important court decisions and case law analysis from expert lawyers.",
  keywords: "legal judgements Delhi, case law Ghaziabad, landmark cases Delhi NCR, legal precedents, court decisions Delhi, legal cases Delhi High Court",
  alternates: {
    canonical: "https://www.thelegalchambers.org/notedjudgement",
  },
  openGraph: {
    title: "Noted Judgements | Landmark Cases from Delhi Courts | The Legal Chambers",
    description: "Landmark legal judgements and precedent-setting cases handled by The Legal Chambers in Delhi & Ghaziabad. Important court decisions and case law analysis.",
    url: "https://www.thelegalchambers.org/notedjudgement",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Noted Judgements - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noted Judgements | Landmark Cases from Delhi Courts | The Legal Chambers",
    description: "Landmark legal judgements and precedent-setting cases handled by The Legal Chambers in Delhi & Ghaziabad. Important court decisions and case law analysis.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B542F",
};

export default function NotedJudgementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

