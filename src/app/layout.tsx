import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DisclaimerProvider from "@/components/DisclaimerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thelegalchambers.org"),
  title: {
    default: "Best Criminal & Corporate Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    template: "%s | The Legal Chambers",
  },
  description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas. Expert lawyers in Delhi & Ghaziabad for criminal, corporate, litigation, and dispute resolution.",
  keywords: "lawyers in Delhi, lawyers in Ghaziabad, criminal lawyers Delhi, corporate lawyers Delhi, best law firm Delhi, legal services Delhi NCR, advocates Delhi High Court",
  alternates: {
    canonical: "https://www.thelegalchambers.org/",
  },
  openGraph: {
    title: "Best Criminal & Corporate Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas. Expert lawyers in Delhi & Ghaziabad.",
    url: "https://www.thelegalchambers.org/",
    siteName: "The Legal Chambers",
    images: [
      {
        url: "https://www.thelegalchambers.org/favicon.png",
        width: 512,
        height: 512,
        alt: "The Legal Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Criminal & Corporate Lawyers in Delhi & Ghaziabad | The Legal Chambers",
    description: "Full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas.",
    images: ["https://www.thelegalchambers.org/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B542F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - moved to afterInteractive to prevent hydration issues */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Analytics - Load after hydration to prevent mismatch */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H30LR1LVMM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H30LR1LVMM');
          `}
        </Script>
        <DisclaimerProvider>
          <div className="relative w-full flex items-center justify-center ">
            <Navbar />
          </div>
          {children}
        </DisclaimerProvider>
      </body>
    </html>
  );
}
