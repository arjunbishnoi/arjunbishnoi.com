"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  COMPACT_TITLE_TEXT_CLASSNAME,
  CONTROL_TEXT_CLASSNAME,
} from "@/lib/home-title-styles";

type DirectoryControlsProps<TCategory extends string> = {
  categories: readonly TCategory[];
  activeCategory: TCategory;
  onCategoryChange: (category: TCategory) => void;
  query: string;
  onQueryChange: (value: string) => void;
  isSearchOpen: boolean;
  onSearchOpenChange: (isOpen: boolean) => void;
  searchPlaceholder: string;
  searchAriaLabel: string;
  categorySelectAriaLabel: string;
  openSearchAriaLabel: string;
  closeSearchAriaLabel: string;
  categoryPillLayoutId: string;
  desktopCategoryShellClassName?: string;
  mobileSelectClassName?: string;
  mobileSearchShellClassName?: string;
  desktopSearchShellClassName?: string;
};

export function DirectoryControls<TCategory extends string>({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  isSearchOpen,
  onSearchOpenChange,
  searchPlaceholder,
  searchAriaLabel,
  categorySelectAriaLabel,
  openSearchAriaLabel,
  closeSearchAriaLabel,
  categoryPillLayoutId,
  desktopCategoryShellClassName = "scrollbar-hide mx-auto max-w-full overflow-x-auto rounded-full bg-black/10 p-1 dark:bg-white/20",
  mobileSelectClassName = `h-full w-full appearance-none rounded-full bg-black/10 pl-4 pr-12 indent-0 ${CONTROL_TEXT_CLASSNAME} text-black focus:outline-none dark:bg-white/20 dark:text-white`,
  mobileSearchShellClassName = "absolute inset-0 flex items-center rounded-full bg-black/5 pl-4 pr-2 dark:bg-white/10",
  desktopSearchShellClassName = "bg-black/5 pl-4 pr-1 dark:bg-white/10",
}: DirectoryControlsProps<TCategory>) {
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const desktopSearchInputRef = useRef<HTMLInputElement>(null);
  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      desktopSearchInputRef.current?.focus();
      return;
    }

    mobileSearchInputRef.current?.focus();
  }, [isSearchOpen]);

  const openSearch = () => onSearchOpenChange(true);

  const closeSearch = () => {
    onSearchOpenChange(false);
    onQueryChange("");
  };

  const toggleSearch = () => {
    if (isSearchOpen) {
      closeSearch();
      return;
    }

    openSearch();
  };

  return (
    <>
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
                className={mobileSearchShellClassName}
              >
                <input
                  ref={mobileSearchInputRef}
                  type="search"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      event.currentTarget.blur();
                    }
                  }}
                  enterKeyHint="search"
                  placeholder={searchPlaceholder}
                  className={`h-full w-full bg-transparent pr-10 ${CONTROL_TEXT_CLASSNAME} text-black placeholder:font-medium placeholder:text-black/45 focus:outline-none dark:text-white dark:placeholder:text-white/45`}
                  aria-label={searchAriaLabel}
                />
                {hasQuery ? (
                  <button
                    type="button"
                    onClick={() => {
                      onQueryChange("");
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
                    onCategoryChange(event.target.value as TCategory)
                  }
                  className={mobileSelectClassName}
                  aria-label={categorySelectAriaLabel}
                >
                  {categories.map((category) => (
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
          onClick={toggleSearch}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform active:scale-[0.98] dark:bg-white dark:text-black"
          aria-label={isSearchOpen ? closeSearchAriaLabel : openSearchAriaLabel}
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
            className={desktopCategoryShellClassName}
          >
            <div className="flex min-w-max items-center gap-1">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onCategoryChange(category)}
                    className={`relative h-10 rounded-full px-4 ${COMPACT_TITLE_TEXT_CLASSNAME} sm:px-5`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId={categoryPillLayoutId}
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
                  ? desktopSearchShellClassName
                  : "bg-transparent pl-0",
              ].join(" ")}
            >
              <input
                ref={desktopSearchInputRef}
                type="text"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder={searchPlaceholder}
                className={[
                  `h-full min-w-0 flex-1 bg-transparent ${CONTROL_TEXT_CLASSNAME} text-black placeholder:font-medium placeholder:text-black/45 focus:outline-none dark:text-white dark:placeholder:text-white/45`,
                  isSearchOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none w-0 opacity-0",
                ].join(" ")}
                aria-label={searchAriaLabel}
              />
              {isSearchOpen && hasQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    onQueryChange("");
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
                onClick={toggleSearch}
                className={[
                  "flex shrink-0 items-center justify-center rounded-full transition-transform active:scale-[0.98]",
                  isSearchOpen
                    ? "h-10 w-10 bg-black text-white dark:bg-white dark:text-black"
                    : "h-12 w-12 bg-black text-white dark:bg-white dark:text-black",
                ].join(" ")}
                aria-label={
                  isSearchOpen ? closeSearchAriaLabel : openSearchAriaLabel
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
    </>
  );
}
