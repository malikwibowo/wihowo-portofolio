import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://malikwibowo.com";

  const staticPages = [
    "",
    "/archive",
    "/contact",
    "/moments",
    "/socials",
    "/things",
    "/works",
    "/writings",
  ];

  const urls = staticPages.map((path) => {
    return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
