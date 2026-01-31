import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Legal Services in Delhi & Ghaziabad | The Legal Chambers",
  description: "Comprehensive legal services in Delhi & Ghaziabad. Corporate law, criminal law, litigation, dispute resolution, real estate, family law, IPR, taxation, and more. Expert lawyers for all practice areas.",
  keywords: "practice areas Delhi, legal services Ghaziabad, corporate lawyers Delhi, criminal lawyers Delhi, litigation Delhi, dispute resolution Delhi NCR, real estate lawyers Delhi, family law Delhi, IPR lawyers, taxation lawyers Delhi",
  alternates: {
    canonical: "https://www.thelegalchambers.org/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Legal Services in Delhi & Ghaziabad | The Legal Chambers",
    description: "Comprehensive legal services in Delhi & Ghaziabad. Corporate law, criminal law, litigation, dispute resolution, and more.",
    url: "https://www.thelegalchambers.org/practice-areas",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Practice Areas - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | Legal Services in Delhi & Ghaziabad | The Legal Chambers",
    description: "Comprehensive legal services in Delhi & Ghaziabad. Corporate law, criminal law, litigation, dispute resolution, and more.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
    "logo": "https://www.thelegalchambers.org/favicon.png",
    "image": "https://www.thelegalchambers.org/favicon.png",
    "areaServed": [
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Ghaziabad"
      },
      {
        "@type": "City",
        "name": "Delhi NCR"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
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
      "streetAddress": "483, Lawyers Chambers, Block-II",
      "addressLocality": "Delhi High Court, New Delhi",
      "postalCode": "11003",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96627-78086",
      "email": "office@thelegalchambers.org",
      "contactType": "customer service",
      "areaServed": ["Delhi", "Ghaziabad", "Delhi NCR", "IN"],
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

