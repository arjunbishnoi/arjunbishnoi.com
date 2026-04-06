import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const indexedRoutes = [
  { path: "/", priority: 1, images: [siteConfig.images.headshot, siteConfig.images.portrait] },
  { path: "/projects", priority: 0.8, images: [siteConfig.images.headshot] },
  { path: "/resume", priority: 0.85, images: [siteConfig.images.headshot] },
] as const;
const LAST_CONTENT_UPDATE = "2026-04-06";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_CONTENT_UPDATE);

  return indexedRoutes.map(({ path, priority, images }) => ({
    url: path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
    images: [...images],
  }));
}
