import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DisclaimerProvider from "@/components/DisclaimerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Legal Chambers",
  description: "Advocates | Solicitors | Arbitrators — Advocates of Justice, Architects of Resolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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
      </head>
      <body className={inter.className}>
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
