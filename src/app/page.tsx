import type { Metadata } from "next";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Home | The Legal Chambers",
  description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas. Advocates | Solicitors | Arbitrators — Advocates of Justice, Architects of Resolution.",
  keywords: "law firm, legal services, advocates, solicitors, arbitrators, corporate law, litigation, dispute resolution, legal advisory, India",
  alternates: {
    canonical: "https://www.thelegalchambers.org/",
  },
  openGraph: {
    title: "The Legal Chambers | Full-Service Law Firm",
    description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas.",
    url: "https://www.thelegalchambers.org/",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Legal Chambers | Full-Service Law Firm",
    description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function Home() {
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Legal Chambers",
    "url": "https://www.thelegalchambers.org",
    "logo": "https://www.thelegalchambers.org/logo.png",
    "description": "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas.",
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
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/thelegalchambers",
      "https://www.twitter.com/thelegalchambers",
      "https://www.instagram.com/thelegalchambers"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Legal Chambers",
    "url": "https://www.thelegalchambers.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.thelegalchambers.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="min-h-screen bg-background antialiased">
        <HeroSection />
        <About />
        <UpcomingWebinars />
        <Footer />
      </main>
    </>
  );
}
