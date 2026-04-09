import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/content/blog-articles";
import { projectArticles } from "@/lib/content/project-articles";
import { siteConfig } from "@/lib/site-config";

const contentPublishDates = [
  ...blogArticles.map((article) => article.publishedAt),
  ...projectArticles.map((article) => article.publishedAt),
];

const indexedRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/work",
    priority: 0.9,
    changeFrequency: "weekly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/blog",
    priority: 0.9,
    changeFrequency: "weekly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/apps",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/ai",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/design",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    images: [siteConfig.images.headshot],
  },
  {
    path: "/resume",
    priority: 0.6,
    changeFrequency: "monthly" as const,
    images: [siteConfig.images.headshot],
  },
] as const;

function toAbsoluteUrl(path: string) {
  return path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;
}

function toAbsoluteImage(url: string) {
  return new URL(url, siteConfig.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = indexedRoutes.map(
    ({ path, priority, changeFrequency, images }) => ({
      url: toAbsoluteUrl(path),
      lastModified: staticLastModified,
      changeFrequency,
      priority,
      images: images.map((image) => toAbsoluteImage(image)),
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
    images: [toAbsoluteImage(article.image)],
  }));

  const projectEntries: MetadataRoute.Sitemap = projectArticles.map(
    (article) => ({
      url: `${siteConfig.url}/work/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly",
      priority: 0.78,
      images: [toAbsoluteImage(article.image)],
    }),
  );

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
