import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Clients & Retainers | Trusted Law Firm in Delhi & Ghaziabad | The Legal Chambers",
  description: "Trusted by industry leaders in Delhi & Ghaziabad. We partner with clients across industries offering proactive guidance, responsive representation, and annual legal advisory plans.",
  keywords: "legal clients Delhi, law firm clients Ghaziabad, corporate clients Delhi NCR, retained clients, legal retainership Delhi, client testimonials, annual legal plan",
  alternates: {
    canonical: "https://www.thelegalchambers.org/clients",
  },
  openGraph: {
    title: "Clients & Retainers | Trusted Law Firm in Delhi & Ghaziabad | The Legal Chambers",
    description: "Trusted by industry leaders in Delhi & Ghaziabad. We partner with clients across industries offering proactive guidance and retainership programs.",
    url: "https://www.thelegalchambers.org/clients",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Clients - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients & Retainers | Trusted Law Firm in Delhi & Ghaziabad | The Legal Chambers",
    description: "Trusted by industry leaders in Delhi & Ghaziabad. We partner with clients across industries offering proactive guidance and retainership programs.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B542F",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

