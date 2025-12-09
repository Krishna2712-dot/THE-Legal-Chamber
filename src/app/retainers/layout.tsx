import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retainers | The Legal Chambers",
  description: "Annual Legal Advisory Plan. Always-on counsel for individuals, families, and enterprises that value preventive legal strategy. Retainership programs starting from ₹2,000 per year.",
  keywords: "legal retainership, annual legal plan, legal advisory plan, retainer services, legal consultation plan",
  alternates: {
    canonical: "https://www.thelegalchambers.org/retainers",
  },
  openGraph: {
    title: "Retainers | The Legal Chambers",
    description: "Annual Legal Advisory Plan. Always-on counsel for individuals, families, and enterprises that value preventive legal strategy.",
    url: "https://www.thelegalchambers.org/retainers",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Retainers - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retainers | The Legal Chambers",
    description: "Annual Legal Advisory Plan. Always-on counsel for individuals, families, and enterprises that value preventive legal strategy.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function RetainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

