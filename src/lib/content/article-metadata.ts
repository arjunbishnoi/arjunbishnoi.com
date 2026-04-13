import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site-metadata";
import { defaultKeywords, siteConfig } from "@/lib/site-config";

type ArticleMetadataShape = {
  slug: string;
  title: string;
  description: string;
  deck: string;
  category: string;
  tags: string[];
  author: string;
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

  const socialTitle = article.title;
  const socialDescription = article.deck;

  return buildPageMetadata({
    title: article.title,
    absoluteTitle: true,
    path: `${basePath}/${article.slug}`,
    description: article.description,
    keywords: [...new Set([...defaultKeywords, article.category, ...article.tags])],
    authors: [{ name: article.author, url: siteConfig.canonicalHomeUrl }],
    creator: article.author,
    publisher: siteConfig.name,
    includeSocial: true,
    socialTitle,
    socialDescription,
    twitterCard: "summary_large_image",
    openGraphType: "article",
    publishedTime: article.publishedAt,
    articleSection: article.category,
    articleTags: article.tags,
    articleAuthors: [article.author],
    imageUrl: new URL(article.image, siteConfig.url).toString(),
    imageAlt: `${article.title} by ${siteConfig.name}`,
  });
}
