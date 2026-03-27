import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.url;

const sitemapEntries = [
  {
    url: `${baseUrl}/`,
    priority: "1.0",
    changeFrequency: "monthly",
    images: [
      `${baseUrl}/arjun-bishnoi.jpg`,
      `${baseUrl}/arjun-bishnoi-portrait.jpg`,
    ],
  },
  {
    url: `${baseUrl}/projects`,
    priority: "0.8",
    changeFrequency: "monthly",
    images: [`${baseUrl}/arjun-bishnoi.jpg`],
  },
];

export const dynamic = "force-static";

export function GET() {
  const lastModified = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
${entry.images.map((image) => `    <image:image><image:loc>${image}</image:loc></image:image>`).join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
