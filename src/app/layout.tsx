import ClientLayout from "@/components/layout/clientLayout";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malik Wibowo – UI/UX Designer & Product Design Specialist",
  description:
    "Malik Wibowo, an UI/UX designer from Malang, Indonesia (3+ years experience), currently at Dipa Inhouse. Expert in Figma, Framer, and Jitter with a portfolio of web dashboards, landing pages, and app designs.",
  openGraph: {
    title: "Malik Wibowo – UI/UX Designer & Product Design Specialist",
    description:
      "Explore Malik Wibowo’s portfolio: UI/UX design, interaction prototypes, Framer-built websites, and Dribbble showcases.",
    url: "https://malikwibowo.com/",
    siteName: "Malik Wibowo Portfolio",
    images: [
      {
        url: "/malik.png",
        width: 512,
        height: 512,
        alt: "Malik Wibowo – UI/UX Designer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Wibowo – UI/UX Designer",
    description: "UI/UX · Product Design · Figma · Framer · Dribbble Portfolio",
    images: ["/malik.png"],
    creator: "@malikkwibowo", // if applicable
  },
  icons: {
    icon: [
      {
        url: "/malik.png",
        href: "/malik.png",
      },
    ],
  },
  keywords: [
    "Malik Wibowo",
    "UI UX designer",
    "UI designer",
    "UX designer",
    "Product design",
    "Figma",
    "Framer",
    "Malang Indonesia",
    "Dipa Inhouse",
    "Dribbble portfolio",
    "Interactive design",
    "Web dashboards",
    "Landing page design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Malik Wibowo",
              alternateName: "Malik KW",
              url: "https://malikwibowo.com/",
              image: "https://malikwibowo.com/malik.png",
              jobTitle: "UI/UX Designer",
              worksFor: {
                "@type": "Organization",
                name: "Dipa Inhouse",
              },
              sameAs: [
                "https://www.linkedin.com/in/malikwibowo",
                "https://dribbble.com/malikwibowo",
                "https://github.com/malikwibowo",
                "https://twitter.com/malikkwibowo",
              ],
              description:
                "Malik Wibowo is a UI/UX designer based in Malang, Indonesia, with 3+ years of experience designing interactive websites, dashboards, and applications using Figma, Framer, and Jitter.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malang",
                addressCountry: "Indonesia",
              },
              knowsAbout: [
                "UI Design",
                "UX Design",
                "Product Design",
                "Figma",
                "Framer",
                "Jitter",
                "Responsive Design",
                "Design Systems",
                "Prototyping",
              ],
            }),
          }}
        />
      </Head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
