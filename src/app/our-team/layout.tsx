import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Our Team | Expert Lawyers in Delhi & Ghaziabad | The Legal Chambers",
  description: "Meet the expert lawyers and legal professionals at The Legal Chambers in Delhi & Ghaziabad. Multidisciplinary team with decades of combined experience across litigation, arbitration, and advisory practices.",
  keywords: "legal team Delhi, lawyers Ghaziabad, advocates Delhi, partners Delhi NCR, associates Delhi, legal professionals, law firm team Delhi, legal experts Ghaziabad",
  alternates: {
    canonical: "https://www.thelegalchambers.org/our-team",
  },
  openGraph: {
    title: "Our Team | Expert Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Meet the expert lawyers and legal professionals at The Legal Chambers in Delhi & Ghaziabad. Multidisciplinary team with decades of combined experience.",
    url: "https://www.thelegalchambers.org/our-team",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Our Team - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Expert Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Meet the expert lawyers and legal professionals at The Legal Chambers in Delhi & Ghaziabad. Multidisciplinary team with decades of combined experience.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B542F",
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

