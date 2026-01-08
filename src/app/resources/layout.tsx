import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Resources | Blogs, Judgements & Media | The Legal Chambers",
  description: "Legal insights, case notes, and thought leadership from expert lawyers in Delhi & Ghaziabad. Stay informed with curated legal updates, judgements, blogs, and multimedia explainers.",
  keywords: "legal resources Delhi, legal blogs Ghaziabad, case notes Delhi NCR, legal judgements, legal news Delhi, legal insights, legal updates, law firm resources",
  alternates: {
    canonical: "https://www.thelegalchambers.org/resources",
  },
  openGraph: {
    title: "Legal Resources | Blogs, Judgements & Media | The Legal Chambers",
    description: "Legal insights, case notes, and thought leadership from expert lawyers in Delhi & Ghaziabad. Stay informed with curated legal updates.",
    url: "https://www.thelegalchambers.org/resources",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "Resources - The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Resources | Blogs, Judgements & Media | The Legal Chambers",
    description: "Legal insights, case notes, and thought leadership from expert lawyers in Delhi & Ghaziabad. Stay informed with curated legal updates.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

