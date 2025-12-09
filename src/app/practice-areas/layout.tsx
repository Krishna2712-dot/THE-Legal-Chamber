import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | The Legal Chambers",
  description: "Integrated legal expertise across industries. From corporate transactions to high-stakes litigation and advisory mandates, The Legal Chambers offers end-to-end representation through multidisciplinary teams.",
  keywords: "practice areas, legal services, corporate law, litigation, dispute resolution, real estate law, family law, employment law, IPR, taxation, banking law, criminal law, legal expertise",
  alternates: {
    canonical: "https://www.thelegalchambers.org/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | The Legal Chambers",
    description: "Integrated legal expertise across industries. From corporate transactions to high-stakes litigation and advisory mandates.",
    url: "https://www.thelegalchambers.org/practice-areas",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Practice Areas - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | The Legal Chambers",
    description: "Integrated legal expertise across industries. From corporate transactions to high-stakes litigation and advisory mandates.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "The Legal Chambers",
    "url": "https://www.thelegalchambers.org",
    "logo": "https://www.thelegalchambers.org/logo.png",
    "image": "https://www.thelegalchambers.org/og-default.jpg",
    "areaServed": "India",
    "serviceType": [
      "Corporate & Commercial Law",
      "Litigation & Dispute Resolution",
      "Real Estate & Property Law",
      "Family & Personal Laws",
      "Labour & Employment Law",
      "Intellectual Property Rights (IPR)",
      "Taxation (Direct & Indirect)",
      "Banking & Finance",
      "Cyber & Technology Law",
      "Criminal Law",
      "Consumer & Civil Law",
      "Environment & Regulatory Compliance",
      "Startups & MSMEs Advisory",
      "International & Cross-Border Matters",
      "Pro Bono & Legal Aid"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "K Block, Defence Colony",
      "addressLocality": "New Delhi",
      "postalCode": "110024",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96627-78086",
      "email": "support@thelegalchambers.org",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      {children}
    </>
  );
}

