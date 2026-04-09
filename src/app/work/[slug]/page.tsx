import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/article/ArticleDetailPage";
import { WorkShareButton } from "@/components/work/WorkShareButton";
import {
  projectArticles,
  getProjectArticleBySlug,
} from "@/lib/content/project-articles";
import { buildArticleMetadata } from "@/lib/content/article-metadata";

type ProjectArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ProjectArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getProjectArticleBySlug(slug);

  return buildArticleMetadata({
    article,
    basePath: "/work",
    fallbackTitle: "Work",
    fallbackDescription:
      "Selected mobile app and product engineering work by Arjun Bishnoi.",
  });
}

export default async function ProjectArticlePage({
  params,
}: ProjectArticlePageProps) {
  const { slug } = await params;
  const article = getProjectArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleDetailPage
      article={article}
      routePrefix="/work"
      structuredDataType="Article"
      articleSection="Work"
      shareButton={<WorkShareButton title={article.title} />}
      attributionLabel="Built by"
      sourceUrl={article.sourceUrl}
      sourceLinkLabel="View source code"
    />
  );
}
