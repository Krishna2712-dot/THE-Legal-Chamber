import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noted Judgements | The Legal Chambers",
  description: "Landmark decisions and precedent-setting matters handled or closely followed by our teams.",
  keywords: "legal judgements, case law, landmark cases, legal precedents, court decisions, legal cases",
  alternates: {
    canonical: "https://www.thelegalchambers.org/notedjudgement",
  },
  openGraph: {
    title: "Noted Judgements | The Legal Chambers",
    description: "Landmark decisions and precedent-setting matters handled or closely followed by our teams.",
    url: "https://www.thelegalchambers.org/notedjudgement",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Noted Judgements - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noted Judgements | The Legal Chambers",
    description: "Landmark decisions and precedent-setting matters handled or closely followed by our teams.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function NotedJudgementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

