import ClientLayout from "@/components/layout/clientLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malik Wibowo - UIUX Designer",
  description: "Malik Wibowo's personal website portfolio",
  icons: {
    icon: [
      {
        url: "/malik.png",
        href: "/malik.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
