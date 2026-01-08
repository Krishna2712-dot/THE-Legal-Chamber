import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Legal Internships & Training in Delhi | The Legal Chambers",
  description: "Build your legal career with The Legal Chambers in Delhi. Paid & unpaid internships, training programs, and mentorship opportunities for law students and young professionals.",
  keywords: "legal internships Delhi, law firm careers Ghaziabad, legal training Delhi, law student internships, legal mentorship Delhi NCR, careers in law",
  alternates: {
    canonical: "https://www.thelegalchambers.org/retainers",
  },
  openGraph: {
    title: "Careers | Legal Internships & Training in Delhi | The Legal Chambers",
    description: "Build your legal career with The Legal Chambers in Delhi. Paid & unpaid internships, training programs, and mentorship opportunities.",
    url: "https://www.thelegalchambers.org/retainers",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Careers - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Legal Internships & Training in Delhi | The Legal Chambers",
    description: "Build your legal career with The Legal Chambers in Delhi. Paid & unpaid internships, training programs, and mentorship opportunities.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
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

