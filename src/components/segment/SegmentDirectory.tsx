"use client";

import { useMemo, useState } from "react";
import { DirectoryControls } from "@/components/directory/DirectoryControls";
import { BlogCard } from "@/components/home/BlogCard";
import { WorkCard } from "@/components/work/WorkCard";
import { segmentKeywords } from "@/lib/content/domain-keywords";
import { blogs } from "@/lib/content/blogs";
import { workItems } from "@/lib/content/work";
import {
  buildSearchableText,
  matchesKeywordSet,
  normalizeSearchValue,
} from "@/lib/directory/search-utils";

export type SegmentKey = "apps" | "ai" | "design";

const segmentDirectoryCategories = ["All", "Work", "Blog"] as const;
type SegmentDirectoryCategory = (typeof segmentDirectoryCategories)[number];

type SegmentDirectoryEntry =
  | {
      id: string;
      kind: "Work";
      searchable: string;
      sortKey: number;
      workItem: (typeof workItems)[number];
    }
  | {
      id: string;
      kind: "Blog";
      searchable: string;
      sortKey: number;
      blog: (typeof blogs)[number];
    };

function belongsToSegment(values: string[], segment: SegmentKey) {
  return matchesKeywordSet(values, segmentKeywords[segment]);
}

function parseSortKey(value: string) {
  const parsedDate = Date.parse(value);
  return Number.isNaN(parsedDate) ? 0 : parsedDate;
}

function buildSegmentEntries(segment: SegmentKey): SegmentDirectoryEntry[] {
  const workEntries: SegmentDirectoryEntry[] = workItems
    .filter((workItem) =>
      belongsToSegment(
        [
          workItem.title,
          workItem.description,
          workItem.category ?? "",
          ...workItem.tags,
        ],
        segment,
      ),
    )
    .map((workItem) => ({
      id: workItem.id,
      kind: "Work",
      searchable: buildSearchableText([
        workItem.title,
        workItem.description,
        workItem.category ?? "",
        ...workItem.tags,
      ]),
      sortKey: parseSortKey(workItem.date),
      workItem,
    }));

  const blogEntries: SegmentDirectoryEntry[] = blogs
    .filter((blog) =>
      belongsToSegment(
        [blog.title, blog.description, blog.category ?? "", ...blog.tags],
        segment,
      ),
    )
    .map((blog) => ({
      id: blog.id,
      kind: "Blog",
      searchable: buildSearchableText([
        blog.title,
        blog.description,
        blog.category ?? "",
        ...blog.tags,
      ]),
      sortKey: parseSortKey(blog.date),
      blog,
    }));

  return [...workEntries, ...blogEntries].sort((a, b) => b.sortKey - a.sortKey);
}

export function SegmentDirectory({ segment }: { segment: SegmentKey }) {
  const [activeCategory, setActiveCategory] =
    useState<SegmentDirectoryCategory>("All");
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const segmentEntries = useMemo(() => buildSegmentEntries(segment), [segment]);

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(query);

    return segmentEntries.filter((entry) => {
      if (activeCategory !== "All" && entry.kind !== activeCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return entry.searchable.includes(normalizedQuery);
    });
  }, [activeCategory, query, segmentEntries]);

  const emptyMessage = "More work is on the way.";

  return (
    <section className="mt-[clamp(1.6rem,3vw,2.6rem)]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div>
          <DirectoryControls
            categories={segmentDirectoryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
            isSearchOpen={isSearchOpen}
            onSearchOpenChange={setIsSearchOpen}
            searchPlaceholder="Search entries..."
            searchAriaLabel="Search entries"
            categorySelectAriaLabel="Select content category"
            openSearchAriaLabel="Open entry search"
            closeSearchAriaLabel="Close entry search"
            categoryPillLayoutId={`segment-category-pill-${segment}`}
            desktopCategoryShellClassName="scrollbar-hide mx-auto max-w-full overflow-x-auto rounded-full bg-black/5 p-1 dark:bg-white/10"
          />
        </div>

        {filteredEntries.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-20 xl:mt-24 xl:grid-cols-3">
            {filteredEntries.map((entry) =>
              entry.kind === "Work" ? (
                <WorkCard key={`work-${entry.id}`} workItem={entry.workItem} />
              ) : (
                <BlogCard key={`blog-${entry.id}`} blog={entry.blog} />
              ),
            )}
          </div>
        ) : (
          <div className="mt-14 px-6 py-10 text-center lg:mt-20 xl:mt-24">
            <p className="text-base text-black/80 dark:text-white/80">
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
