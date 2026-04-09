"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { WorkCard } from "@/components/work/WorkCard";
import {
  projectCategories as workCategories,
  type ProjectCategory as WorkCategory,
} from "@/lib/content/project-categories";
import { workItems } from "@/lib/content/work";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

const workCategoryKeywords: Record<Exclude<WorkCategory, "All">, string[]> = {
  "Mobile Apps": [
    "mobile app",
    "mobile apps",
    "react native",
    "expo",
    "swiftui",
    "ios",
    "kotlin",
    "android",
  ],
  "AI/ML": [
    "ai",
    "ai/ml",
    "ml",
    "machine learning",
    "artificial intelligence",
    "llm",
    "openai",
    "langchain",
    "pytorch",
    "tensorflow",
  ],
  Design: [
    "design",
    "ui",
    "ux",
    "ui/ux",
    "web design",
    "product design",
    "figma",
  ],
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function includesKeyword(value: string, keyword: string) {
  const normalizedValue = normalize(value);
  const normalizedKeyword = normalize(keyword);

  if (!normalizedValue || !normalizedKeyword) {
    return false;
  }

  if (normalizedKeyword.length <= 3) {
    const pattern = new RegExp(`\\b${escapeRegex(normalizedKeyword)}\\b`);
    return pattern.test(normalizedValue);
  }

  return normalizedValue.includes(normalizedKeyword);
}

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

  const keywords = workCategoryKeywords[category];

  return searchableValues.some((value) =>
    keywords.some((keyword) => includesKeyword(value, keyword)),
  );
}

export function WorkDirectory() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const desktopSearchInputRef = useRef<HTMLInputElement>(null);
  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    if (isSearchOpen) {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        desktopSearchInputRef.current?.focus();
        return;
      }

      mobileSearchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const filteredWorkItems = useMemo(() => {
    const normalizedQuery = normalize(query);

    return workItems.filter((workItem) => {
      const categoryMatches = matchesWorkCategory(workItem, activeCategory);

      if (!categoryMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        workItem.title,
        workItem.description,
        workItem.category ?? "",
        ...workItem.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="mt-[clamp(1.6rem,3vw,2.6rem)]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div>
          <div className="mx-auto flex w-[80%] max-w-[27rem] items-center justify-center gap-2 sm:w-[82%] md:w-[88%] lg:hidden">
            <div className="relative h-12 min-w-0 flex-1">
              <AnimatePresence mode="sync" initial={false}>
                {isSearchOpen ? (
                  <motion.label
                    key="mobile-search"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center rounded-full bg-black/5 pl-4 pr-2 dark:bg-white/10"
                  >
                    <input
                      ref={mobileSearchInputRef}
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          event.currentTarget.blur();
                        }
                      }}
                      enterKeyHint="search"
                      placeholder="Search work..."
                      className="h-full w-full bg-transparent pr-10 text-[16px] font-medium text-black placeholder:font-medium placeholder:text-black/45 focus:outline-none dark:text-white dark:placeholder:text-white/45"
                      aria-label="Search work"
                    />
                    {hasQuery ? (
                      <button
                        type="button"
                        onClick={() => {
                          setQuery("");
                          mobileSearchInputRef.current?.focus();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" strokeWidth={2.8} />
                      </button>
                    ) : null}
                  </motion.label>
                ) : (
                  <motion.label
                    key="mobile-picker"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 block"
                  >
                    <select
                      value={activeCategory}
                      onChange={(event) =>
                        setActiveCategory(event.target.value as WorkCategory)
                      }
                      className="h-full w-full appearance-none rounded-full bg-black/10 pl-4 pr-12 indent-0 text-sm font-medium text-black focus:outline-none dark:bg-white/20 dark:text-white"
                      aria-label="Select work category"
                    >
                      {workCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/70 dark:text-white/70"
                      strokeWidth={2.8}
                      aria-hidden="true"
                    />
                  </motion.label>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => {
                if (!isSearchOpen) {
                  setIsSearchOpen(true);
                  return;
                }

                setIsSearchOpen(false);
                setQuery("");
              }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform active:scale-[0.98] dark:bg-white dark:text-black"
              aria-label={
                !isSearchOpen ? "Open work search" : "Close work search"
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSearchOpen ? (
                  <motion.span
                    key="mobile-close-icon"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <X className="h-4 w-4" strokeWidth={3.1} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="mobile-open-icon"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Search
                      className="h-[1.125rem] w-[1.125rem]"
                      strokeWidth={2.8}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="hidden items-center gap-4 lg:flex lg:justify-center">
            <div className="w-full lg:w-auto">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="scrollbar-hide mx-auto max-w-full overflow-x-auto rounded-full bg-black/10 p-1 dark:bg-white/20"
              >
                <div className="flex min-w-max items-center gap-1">
                  {workCategories.map((category) => {
                    const isActive = category === activeCategory;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className="relative h-10 rounded-full px-4 text-sm font-medium sm:px-5"
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="work-category-pill"
                            className="absolute inset-0 rounded-full bg-black dark:bg-white"
                            transition={{
                              type: "spring",
                              stiffness: 520,
                              damping: 34,
                            }}
                          />
                        ) : null}
                        <span
                          className={[
                            "relative z-10 whitespace-nowrap transition-colors",
                            isActive
                              ? "text-white dark:text-black"
                              : "text-black/75 dark:text-white/80",
                          ].join(" ")}
                        >
                          {category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div
              className={[
                isSearchOpen ? "w-full max-w-[22rem] lg:w-[22rem]" : "w-12",
                "transition-[width,max-width] duration-300 ease-out",
              ].join(" ")}
            >
              <div className="flex justify-center">
                <motion.label
                  layout
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 34,
                    mass: 0.9,
                  }}
                  className={[
                    "flex h-12 w-full items-center overflow-hidden rounded-full pr-0 transition-colors",
                    isSearchOpen
                      ? "bg-black/5 pl-4 pr-1 dark:bg-white/10"
                      : "bg-transparent pl-0",
                  ].join(" ")}
                >
                  <input
                    ref={desktopSearchInputRef}
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search work..."
                    className={[
                      "h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-black placeholder:font-medium placeholder:text-black/45 focus:outline-none dark:text-white dark:placeholder:text-white/45",
                      isSearchOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none w-0 opacity-0",
                    ].join(" ")}
                    aria-label="Search work"
                  />
                  {isSearchOpen && hasQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        desktopSearchInputRef.current?.focus();
                      }}
                      className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" strokeWidth={2.3} />
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isSearchOpen) {
                        setIsSearchOpen(true);
                        return;
                      }

                      setIsSearchOpen(false);
                      setQuery("");
                    }}
                    className={[
                      "flex shrink-0 items-center justify-center rounded-full transition-transform active:scale-[0.98]",
                      isSearchOpen
                        ? "h-10 w-10 bg-black text-white dark:bg-white dark:text-black"
                        : "h-12 w-12 bg-black text-white dark:bg-white dark:text-black",
                    ].join(" ")}
                    aria-label={
                      !isSearchOpen ? "Open work search" : "Close work search"
                    }
                  >
                    {isSearchOpen ? (
                      <X className="h-4 w-4" strokeWidth={3.1} />
                    ) : (
                      <Search
                        className="h-[1.125rem] w-[1.125rem]"
                        strokeWidth={2.8}
                      />
                    )}
                  </button>
                </motion.label>
              </div>
            </div>
          </div>
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
