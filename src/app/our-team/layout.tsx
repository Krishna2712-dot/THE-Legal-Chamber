import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | The Legal Chambers",
  description: "Meet the professionals behind The Legal Chambers. Our multidisciplinary team brings together decades of combined experience across litigation, arbitration, and advisory practices.",
  keywords: "legal team, lawyers, advocates, partners, associates, legal professionals, law firm team, legal experts",
  alternates: {
    canonical: "https://www.thelegalchambers.org/our-team",
  },
  openGraph: {
    title: "Our Team | The Legal Chambers",
    description: "Meet the professionals behind The Legal Chambers. Our multidisciplinary team brings together decades of combined experience.",
    url: "https://www.thelegalchambers.org/our-team",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Our Team - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | The Legal Chambers",
    description: "Meet the professionals behind The Legal Chambers. Our multidisciplinary team brings together decades of combined experience.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

