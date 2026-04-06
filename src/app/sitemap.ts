import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const indexedRoutes = ["/", "/projects"] as const;
const LAST_CONTENT_UPDATE = "2026-04-02";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_CONTENT_UPDATE);

  return indexedRoutes.map((path) => ({
    url: path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
    images:
      path === "/"
        ? [siteConfig.images.headshot, siteConfig.images.portrait]
        : [siteConfig.images.headshot],
  }));
}
