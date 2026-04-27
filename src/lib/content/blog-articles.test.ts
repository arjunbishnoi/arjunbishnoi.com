import { describe, expect, it } from "vitest";
import { blogArticles, getBlogArticleBySlug } from "./blog-articles";

function toTitleSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

describe("blog-articles", () => {
  it("resolves an article by slug", () => {
    const article = getBlogArticleBySlug("the-future-of-ui-design-in-2026");

    expect(article).toBeDefined();
    expect(article?.title).toBe("The future of UI design in 2026");
  });

  it("returns undefined for unknown slug", () => {
    expect(getBlogArticleBySlug("missing-slug")).toBeUndefined();
  });

  it("keeps article slugs unique", () => {
    const slugs = blogArticles.map((article) => article.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("stores valid ISO publish dates", () => {
    for (const article of blogArticles) {
      expect(Number.isNaN(Date.parse(article.publishedAt))).toBe(false);
    }
  });

  it("keeps slugs aligned with full titles", () => {
    for (const article of blogArticles) {
      expect(article.slug).toBe(toTitleSlug(article.title));
    }
  });
});
