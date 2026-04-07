import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogShareButton } from "@/components/blog/BlogShareButton";
import { Footer } from "@/components/layout/Footer";
import { blogArticles, getBlogArticleBySlug } from "@/lib/content/blog-articles";
import {
  BLOG_POST_SECTION_TITLE_CLASSNAME,
  PAGE_HERO_STACK_CLASSNAME,
  PAGE_HERO_SUBTITLE_CLASSNAME,
  PAGE_HERO_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteConfig } from "@/lib/site-config";

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

  if (!article) {
    return buildPageMetadata({
      title: "Blog",
      path: "/blog",
      description: "Mobile Apps, AI & Design",
      index: false,
    });
  }

  return buildPageMetadata({
    title: article.title,
    path: `/blog/${article.slug}`,
    description: article.description,
    includeSocial: true,
    imageUrl: new URL(article.image, siteConfig.url).toString(),
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

  const heroMetaTextClassName =
    "text-[1rem] font-normal leading-[1.64] tracking-[-0.01em] text-black/84 dark:text-white/82 sm:text-[1.03rem] lg:text-[1.08rem]";
  const bodyTextClassName =
    "text-[1rem] font-normal leading-[1.64] tracking-[-0.01em] text-black/84 dark:text-white/82 sm:text-[1.03rem] lg:text-[1.08rem]";

  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <div className="flex-1 px-6 pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-40">
        <article className="mx-auto w-full max-w-[1400px]">
          <header className={PAGE_HERO_STACK_CLASSNAME}>
            <p className={heroMetaTextClassName}>
              {article.publishedLabel}
            </p>
            <h1 className={PAGE_HERO_TITLE_CLASSNAME}>
              {article.title}
            </h1>
            <p className={PAGE_HERO_SUBTITLE_CLASSNAME}>
              {article.deck}
            </p>
            <BlogShareButton title={article.title} />
          </header>

          <div className="mx-auto mt-14 max-w-[44rem] sm:mt-16 lg:mt-20 lg:max-w-[52rem]">
            <div className={`space-y-6 ${bodyTextClassName}`}>
              {article.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16 lg:mt-18 lg:space-y-[4.5rem]">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className={BLOG_POST_SECTION_TITLE_CLASSNAME}>
                    {section.title}
                  </h2>
                  <div className={`mt-4 space-y-6 sm:mt-5 ${bodyTextClassName}`}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-16 sm:mt-20">
              <p className="text-[0.82rem] font-medium tracking-[-0.012em] text-black/60 dark:text-white/60 sm:text-[0.88rem]">
                Author
              </p>
              <p className="mt-3 text-[1.18rem] font-medium leading-[1.08] tracking-[-0.032em] text-black dark:text-white sm:text-[1.35rem]">
                {article.author}
              </p>
            </section>
          </div>
        </article>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
