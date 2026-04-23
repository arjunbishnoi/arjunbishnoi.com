"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePersistedHorizontalScroll } from "@/hooks/use-persisted-horizontal-scroll";
import {
  HOME_SECTION_TITLE_CLASSNAME,
  PILL_BUTTON_TEXT_CLASSNAME,
} from "@/lib/home-title-styles";

type HomeHorizontalSectionProps<T> = {
  id: string;
  title: string;
  viewAllHref: string;
  viewAllAriaLabel: string;
  storageKey: string;
  items: T[];
  getItemKey: (item: T, index: number) => string | number;
  renderItem: (item: T) => ReactNode;
  titleClassName?: string;
};

export function HomeHorizontalSection<T>({
  id,
  title,
  viewAllHref,
  viewAllAriaLabel,
  storageKey,
  items,
  getItemKey,
  renderItem,
  titleClassName,
}: HomeHorizontalSectionProps<T>) {
  const carouselRef = usePersistedHorizontalScroll(storageKey);

  return (
    <section
      id={id}
      className="home-stack-gap-after relative py-0 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8 pt-0 md:pt-16 lg:pt-20">
        <div className="flex items-center justify-between w-full relative">
          <h2 className={titleClassName ?? HOME_SECTION_TITLE_CLASSNAME}>
            {title}
          </h2>

          <Link
            href={viewAllHref}
            className={cn(
              `pill-interactive flex-none h-10 md:h-12 lg:h-14 flex items-center justify-center gap-2 md:gap-2.5 rounded-full bg-black text-white px-5 md:px-7 lg:px-8 ${PILL_BUTTON_TEXT_CLASSNAME} md:translate-y-[3px] lg:translate-y-[4px]`,
              "dark:bg-white dark:text-black",
            )}
            aria-label={viewAllAriaLabel}
          >
            View all
            <ChevronRight
              className="w-4 h-4 md:w-5 md:h-5 lg:w-[1.35rem] lg:h-[1.35rem] shrink-0"
              strokeWidth={2.25}
              aria-hidden
            />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-0 pt-4 md:pt-2 lg:pt-2 md:px-6 lg:px-8 pb-0 md:pb-6">
        <div
          ref={carouselRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 scroll-pl-6 scroll-pr-6 md:scroll-pl-0 md:scroll-pr-0 pt-2 pb-2 -mt-2 -mb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={getItemKey(item, index)}
                className={cn(
                  "snap-always w-[78vw] flex-none md:w-auto",
                  isLast ? "snap-end" : "snap-start",
                )}
              >
                {renderItem(item)}
              </div>
            );
          })}

          <div className="w-[1px] shrink-0 md:hidden" />
        </div>
      </div>
    </section>
  );
}
