import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Legal Chambers",
  description: "Schedule a consultation or meet us at our Defence Colony head office. We serve clients across major Indian metros through our regional desks and on-ground associates.",
  keywords: "contact The Legal Chambers, legal consultation, law firm contact, legal advice, New Delhi law firm, Defence Colony",
  alternates: {
    canonical: "https://www.thelegalchambers.org/contact",
  },
  openGraph: {
    title: "Contact | The Legal Chambers",
    description: "Schedule a consultation or meet us at our Defence Colony head office. We serve clients across major Indian metros.",
    url: "https://www.thelegalchambers.org/contact",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contact The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | The Legal Chambers",
    description: "Schedule a consultation or meet us at our Defence Colony head office. We serve clients across major Indian metros.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Legal Chambers",
    "url": "https://www.thelegalchambers.org/contact",
    "description": "Schedule a consultation or meet us at our Defence Colony head office.",
    "mainEntity": {
      "@type": "Organization",
      "name": "The Legal Chambers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "K Block, Defence Colony",
        "addressLocality": "New Delhi",
        "postalCode": "110024",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-96627-78086",
          "email": "support@thelegalchambers.org",
          "contactType": "customer service"
        },
        {
          "@type": "ContactPoint",
          "email": "press@thelegalchambers.org",
          "contactType": "public relations"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}

