"use client";

import { useMemo, useState } from "react";
import { DirectoryControls } from "@/components/directory/DirectoryControls";
import { WorkCard } from "@/components/work/WorkCard";
import {
  projectCategories as workCategories,
  type ProjectCategory as WorkCategory,
} from "@/lib/content/project-categories";
import { categoryKeywords } from "@/lib/content/domain-keywords";
import { workItems } from "@/lib/content/work";
import {
  buildSearchableText,
  matchesKeywordSet,
  normalizeSearchValue,
} from "@/lib/directory/search-utils";

function matchesWorkCategory(
  workItem: (typeof workItems)[number],
  category: WorkCategory,
) {
  if (category === "All") {
    return true;
  }

  const searchableValues = [
    workItem.title,
    workItem.description,
    workItem.category ?? "",
    ...workItem.tags,
  ];

  return matchesKeywordSet(searchableValues, categoryKeywords[category]);
}

export function WorkDirectory() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredWorkItems = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(query);

    return workItems.filter((workItem) => {
      const categoryMatches = matchesWorkCategory(workItem, activeCategory);

      if (!categoryMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = buildSearchableText([
        workItem.title,
        workItem.description,
        workItem.category ?? "",
        ...workItem.tags,
      ]);

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="mt-[clamp(1.6rem,3vw,2.6rem)]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div>
          <DirectoryControls
            categories={workCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
            isSearchOpen={isSearchOpen}
            onSearchOpenChange={setIsSearchOpen}
            searchPlaceholder="Search work..."
            searchAriaLabel="Search work"
            categorySelectAriaLabel="Select work category"
            openSearchAriaLabel="Open work search"
            closeSearchAriaLabel="Close work search"
            categoryPillLayoutId="work-category-pill"
          />
        </div>

        {filteredWorkItems.length > 0 ? (
          <div className="mt-14 lg:mt-20 xl:mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredWorkItems.map((workItem) => (
              <WorkCard key={workItem.id} workItem={workItem} />
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
