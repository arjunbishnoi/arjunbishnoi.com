import Image from "next/image";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import {
  BLOG_POST_SECTION_TITLE_CLASSNAME,
  PAGE_HERO_STACK_CLASSNAME,
  PAGE_HERO_SUBTITLE_CLASSNAME,
  PAGE_HERO_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";
import { siteConfig } from "@/lib/site-config";

type ArticleDetailSection = {
  title: string;
  paragraphs: string[];
};

type ArticleDetailData = {
  slug: string;
  title: string;
  deck: string;
  description: string;
  image: string;
  publishedAt: string;
  publishedLabel: string;
  author: string;
  tags: string[];
  introduction: string[];
  sections: ArticleDetailSection[];
};

type ArticleDetailPageProps = {
  article: ArticleDetailData;
  routePrefix: "/blog" | "/work";
  structuredDataType: "BlogPosting" | "Article";
  articleSection: string;
  shareButton: ReactNode;
  attributionLabel: string;
  sourceUrl?: string;
  sourceLinkLabel?: string;
};

export function ArticleDetailPage({
  article,
  routePrefix,
  structuredDataType,
  articleSection,
  shareButton,
  attributionLabel,
  sourceUrl,
  sourceLinkLabel = "View source code",
}: ArticleDetailPageProps) {
  const heroMetaTextClassName =
    "text-[1rem] font-normal leading-[1.64] tracking-[-0.01em] text-black/84 dark:text-white/82 sm:text-[1.03rem] lg:text-[1.08rem]";
  const bodyTextClassName =
    "text-[1rem] font-normal leading-[1.64] tracking-[-0.01em] text-black/84 dark:text-white/82 sm:text-[1.03rem] lg:text-[1.08rem]";
  const articleUrl = new URL(
    `${routePrefix}/${article.slug}`,
    siteConfig.url,
  ).toString();
  const articleImageUrl = new URL(article.image, siteConfig.url).toString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": structuredDataType,
    headline: article.title,
    name: article.title,
    description: article.description,
    image: [articleImageUrl],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    author: {
      "@type": "Person",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    articleSection,
    keywords: article.tags,
  };

  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="flex-1 px-6 pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-40">
        <article className="mx-auto w-full max-w-[1400px]">
          <header className={PAGE_HERO_STACK_CLASSNAME}>
            <p className={heroMetaTextClassName}>{article.publishedLabel}</p>
            <h1 className={PAGE_HERO_TITLE_CLASSNAME}>{article.title}</h1>
            <p className={PAGE_HERO_SUBTITLE_CLASSNAME}>{article.deck}</p>
            {shareButton}
          </header>

          <div className="mx-auto mt-8 lg:mt-9 max-w-[44rem] lg:max-w-[52rem]">
            <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[40px] lg:rounded-[46px] xl:rounded-[52px] lg:max-w-[38rem] xl:max-w-[40rem]">
              <Image
                src={article.image}
                alt={`${article.title} cover image`}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 38rem, (min-width: 640px) 44rem, calc(100vw - 3rem)"
              />
            </div>

            <div
              className={`mx-auto mt-14 w-full space-y-6 sm:mt-16 lg:mt-20 ${bodyTextClassName}`}
            >
              {article.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mx-auto mt-14 w-full space-y-14 sm:mt-16 sm:space-y-16 lg:mt-20 lg:space-y-20">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className={BLOG_POST_SECTION_TITLE_CLASSNAME}>
                    {section.title}
                  </h2>
                  <div
                    className={`mt-4 space-y-6 sm:mt-5 ${bodyTextClassName}`}
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mx-auto mt-16 w-full sm:mt-20">
              <p className="text-[0.82rem] font-medium tracking-[-0.012em] text-black/60 dark:text-white/60 sm:text-[0.88rem]">
                {attributionLabel}
              </p>
              <p className="mt-3 text-[1.18rem] font-medium leading-[1.08] tracking-[-0.032em] text-black dark:text-white sm:text-[1.35rem]">
                {article.author}
              </p>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-[1rem] font-medium leading-[1.4] tracking-[-0.018em] text-black/84 underline underline-offset-4 transition-colors hover:text-black dark:text-white/82 dark:hover:text-white"
                >
                  {sourceLinkLabel}
                </a>
              ) : null}
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
