import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionDivider } from "@/components/global/sectionDivider";
import SmoothScroller from "@/providers/lenisProviders";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malik Wibowo - UI/UX Designer",
  description: "Portfolio of Malik Wibowo, UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${interTight.variable} antialiased`}
      >
        <SmoothScroller />
        <Navbar />
        {children}
        <SectionDivider />
        <Footer />
      </body>
    </html>
  );
}
