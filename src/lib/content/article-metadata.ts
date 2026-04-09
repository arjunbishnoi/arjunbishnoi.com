import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteConfig } from "@/lib/site-config";

type ArticleMetadataShape = {
  slug: string;
  title: string;
  deck: string;
  publishedAt: string;
  image: string;
};

type BuildArticleMetadataOptions = {
  article: ArticleMetadataShape | undefined;
  basePath: "/blog" | "/work";
  fallbackTitle: "Blog" | "Work";
  fallbackDescription: string;
};

export function buildArticleMetadata({
  article,
  basePath,
  fallbackTitle,
  fallbackDescription,
}: BuildArticleMetadataOptions): Metadata {
  if (!article) {
    return buildPageMetadata({
      title: fallbackTitle,
      path: basePath,
      description: fallbackDescription,
      index: false,
    });
  }

  return buildPageMetadata({
    title: article.title,
    absoluteTitle: true,
    path: `${basePath}/${article.slug}`,
    description: article.deck,
    includeSocial: true,
    socialTitle: article.title,
    twitterCard: "summary",
    openGraphType: "article",
    publishedTime: article.publishedAt,
    imageUrl: new URL(article.image, siteConfig.url).toString(),
  });
}
