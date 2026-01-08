import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lawyers in Delhi & Ghaziabad | The Legal Chambers",
  description: "Contact The Legal Chambers for legal consultation in Delhi & Ghaziabad. Visit our Delhi High Court office or reach us via phone/email. Serving clients across Delhi NCR and major Indian metros.",
  keywords: "contact lawyers Delhi, contact lawyers Ghaziabad, legal consultation Delhi, law firm contact Delhi NCR, legal advice Delhi, Delhi High Court lawyers, Ghaziabad legal services",
  alternates: {
    canonical: "https://www.thelegalchambers.org/contact",
  },
  openGraph: {
    title: "Contact Us | Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Contact The Legal Chambers for legal consultation in Delhi & Ghaziabad. Visit our Delhi High Court office or reach us via phone/email.",
    url: "https://www.thelegalchambers.org/contact",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Contact The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Contact The Legal Chambers for legal consultation in Delhi & Ghaziabad. Visit our Delhi High Court office or reach us via phone/email.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
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
    "description": "Schedule a consultation or meet us at our Delhi High Court office.",
    "mainEntity": {
      "@type": "Organization",
      "name": "The Legal Chambers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "483, Lawyers Chambers, Block-II",
        "addressLocality": "Delhi High Court, New Delhi",
        "postalCode": "11003",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-96627-78086",
          "email": "office@thelegalchambers.org",
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

