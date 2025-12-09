import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | The Legal Chambers",
  description: "Trusted by industry leaders and retained advisors. We partner with clients across industries—offering proactive guidance, responsive representation, and retainership programs.",
  keywords: "legal clients, law firm clients, corporate clients, retained clients, legal retainership, client testimonials",
  alternates: {
    canonical: "https://www.thelegalchambers.org/clients",
  },
  openGraph: {
    title: "Clients | The Legal Chambers",
    description: "Trusted by industry leaders and retained advisors. We partner with clients across industries.",
    url: "https://www.thelegalchambers.org/clients",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Clients - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients | The Legal Chambers",
    description: "Trusted by industry leaders and retained advisors. We partner with clients across industries.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

