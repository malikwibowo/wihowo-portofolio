"use client";

import React, { useState, useEffect } from "react";
import { Inter_Tight } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { SectionDivider } from "@/components/global/sectionDivider";

const SmoothScroller = dynamic(() => import("@/providers/lenisProviders"), {
  ssr: false,
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" dir="ltr">
      <body
        suppressHydrationWarning
        className={`${interTight.variable} antialiased ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        {!isLoading && <SmoothScroller />}
        {!isLoading && <Navbar />}
        {!isLoading && children}
        {!isLoading && <SectionDivider />}
        {!isLoading && <Footer />}
        <Toaster />
      </body>
    </html>
  );
}
