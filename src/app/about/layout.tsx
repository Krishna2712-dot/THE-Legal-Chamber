import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Legal Chambers",
  description: "Delivering comprehensive, strategic legal solutions with precision, integrity, and unwavering commitment to excellence. Learn about The Legal Chambers' mission, vision, and commitment to client success.",
  keywords: "about The Legal Chambers, law firm history, legal team, legal expertise, full-service law firm, India law firm",
  alternates: {
    canonical: "https://www.thelegalchambers.org/about",
  },
  openGraph: {
    title: "About | The Legal Chambers",
    description: "Delivering comprehensive, strategic legal solutions with precision, integrity, and unwavering commitment to excellence.",
    url: "https://www.thelegalchambers.org/about",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "About The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | The Legal Chambers",
    description: "Delivering comprehensive, strategic legal solutions with precision, integrity, and unwavering commitment to excellence.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Legal Chambers",
    "url": "https://www.thelegalchambers.org/about",
    "description": "Delivering comprehensive, strategic legal solutions with precision, integrity, and unwavering commitment to excellence.",
    "mainEntity": {
      "@type": "Organization",
      "name": "The Legal Chambers",
      "description": "Full-service law firm offering integrated, strategic, and high-value legal solutions across the full spectrum of practice areas."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  );
}

