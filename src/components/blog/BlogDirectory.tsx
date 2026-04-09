"use client";

import { useMemo, useState } from "react";
import { DirectoryControls } from "@/components/directory/DirectoryControls";
import { BlogCard } from "@/components/home/BlogCard";
import {
  blogCategories,
  type BlogCategory,
} from "@/lib/content/blog-categories";
import { categoryKeywords } from "@/lib/content/domain-keywords";
import { blogs } from "@/lib/content/blogs";
import {
  buildSearchableText,
  matchesKeywordSet,
  normalizeSearchValue,
} from "@/lib/directory/search-utils";

function matchesBlogCategory(
  blog: (typeof blogs)[number],
  category: BlogCategory,
) {
  if (category === "All") {
    return true;
  }

  const searchableValues = [
    blog.title,
    blog.description,
    blog.category ?? "",
    ...blog.tags,
  ];

  return matchesKeywordSet(searchableValues, categoryKeywords[category]);
}

export function BlogDirectory() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(query);

    return blogs.filter((blog) => {
      const categoryMatches = matchesBlogCategory(blog, activeCategory);

      if (!categoryMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = buildSearchableText([
        blog.title,
        blog.description,
        blog.category ?? "",
        ...blog.tags,
      ]);

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="mt-[clamp(1.6rem,3vw,2.6rem)]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div>
          <DirectoryControls
            categories={blogCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
            isSearchOpen={isSearchOpen}
            onSearchOpenChange={setIsSearchOpen}
            searchPlaceholder="Search blogs..."
            searchAriaLabel="Search blogs"
            categorySelectAriaLabel="Select blog category"
            openSearchAriaLabel="Open blog search"
            closeSearchAriaLabel="Close blog search"
            categoryPillLayoutId="blog-category-pill"
          />
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="mt-14 lg:mt-20 xl:mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="mt-14 px-6 py-10 text-center lg:mt-20 xl:mt-24">
            <p className="text-base text-black/80 dark:text-white/80">
              More work is on the way.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
