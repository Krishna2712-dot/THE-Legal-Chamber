import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Leading Law Firm in Delhi & Ghaziabad | The Legal Chambers",
  description: "Learn about The Legal Chambers, a multidisciplinary PAN-India law firm in Delhi & Ghaziabad delivering comprehensive, strategic legal solutions with precision, integrity, and commitment to excellence.",
  keywords: "about The Legal Chambers, law firm Delhi, law firm Ghaziabad, legal team Delhi, legal expertise, full-service law firm Delhi NCR, India law firm",
  alternates: {
    canonical: "https://www.thelegalchambers.org/about",
  },
  openGraph: {
    title: "About Us | Leading Law Firm in Delhi & Ghaziabad | The Legal Chambers",
    description: "Learn about The Legal Chambers, a multidisciplinary PAN-India law firm delivering comprehensive, strategic legal solutions with precision and integrity.",
    url: "https://www.thelegalchambers.org/about",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "About The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Leading Law Firm in Delhi & Ghaziabad | The Legal Chambers",
    description: "Learn about The Legal Chambers, a multidisciplinary PAN-India law firm delivering comprehensive, strategic legal solutions.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
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

