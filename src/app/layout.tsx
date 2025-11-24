import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
