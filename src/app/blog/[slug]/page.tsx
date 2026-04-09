import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/article/ArticleDetailPage";
import { BlogShareButton } from "@/components/blog/BlogShareButton";
import {
  blogArticles,
  getBlogArticleBySlug,
} from "@/lib/content/blog-articles";
import { buildArticleMetadata } from "@/lib/content/article-metadata";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  return buildArticleMetadata({
    article,
    basePath: "/blog",
    fallbackTitle: "Blog",
    fallbackDescription: "Mobile Apps, AI & Design",
  });
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleDetailPage
      article={article}
      routePrefix="/blog"
      structuredDataType="BlogPosting"
      articleSection={article.category}
      shareButton={<BlogShareButton title={article.title} />}
      attributionLabel="Author"
    />
  );
}
