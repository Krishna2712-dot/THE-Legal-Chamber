import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Courses & Training | Delhi & Ghaziabad | The Legal Chambers",
  description: "Legal training and professional development courses in Delhi & Ghaziabad. Enhance your legal knowledge with expert-led workshops and educational programs from The Legal Chambers.",
  keywords: "legal courses Delhi, law training Ghaziabad, legal education Delhi NCR, professional development Delhi, legal workshops Ghaziabad",
  alternates: {
    canonical: "https://www.thelegalchambers.org/courses",
  },
  openGraph: {
    title: "Legal Courses & Training | Delhi & Ghaziabad | The Legal Chambers",
    description: "Legal training and professional development courses in Delhi & Ghaziabad. Enhance your legal knowledge with expert-led workshops.",
    url: "https://www.thelegalchambers.org/courses",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Courses - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Courses & Training | Delhi & Ghaziabad | The Legal Chambers",
    description: "Legal training and professional development courses in Delhi & Ghaziabad. Enhance your legal knowledge with expert-led workshops.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

