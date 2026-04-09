import { describe, expect, it } from "vitest";
import { getProjectArticleBySlug, projectArticles } from "./project-articles";

function toTitleSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

describe("project-articles", () => {
  it("resolves a project article by slug", () => {
    const article = getProjectArticleBySlug("cryptocurrency-tracker");

    expect(article).toBeDefined();
    expect(article?.title).toBe("Cryptocurrency Tracker");
  });

  it("returns undefined for unknown slug", () => {
    expect(getProjectArticleBySlug("missing-slug")).toBeUndefined();
  });

  it("keeps article slugs unique", () => {
    const slugs = projectArticles.map((article) => article.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("uses valid source URLs", () => {
    for (const article of projectArticles) {
      const url = new URL(article.sourceUrl);

      expect(url.protocol).toBe("https:");
      expect(url.hostname).toContain("github.com");
    }
  });

  it("keeps slugs aligned with full titles", () => {
    for (const article of projectArticles) {
      expect(article.slug).toBe(toTitleSlug(article.title));
    }
  });
});
