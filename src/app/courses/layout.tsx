import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | The Legal Chambers",
  description: "Legal training and professional development courses offered by The Legal Chambers.",
  keywords: "legal courses, law training, legal education, professional development, legal workshops",
  alternates: {
    canonical: "https://www.thelegalchambers.org/courses",
  },
  openGraph: {
    title: "Courses | The Legal Chambers",
    description: "Legal training and professional development courses offered by The Legal Chambers.",
    url: "https://www.thelegalchambers.org/courses",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Courses - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | The Legal Chambers",
    description: "Legal training and professional development courses offered by The Legal Chambers.",
    images: ["https://www.thelegalchambers.org/og-default.jpg"],
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

