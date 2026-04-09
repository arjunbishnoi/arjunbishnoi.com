"use client";

import { WorkCard } from "@/components/work/WorkCard";
import { workItems } from "@/lib/content/work";
import { HomeHorizontalSection } from "@/components/home/HomeHorizontalSection";
import { LANDING_SECTION_TITLE_CLASSNAME } from "@/lib/home-title-styles";

export function WorkSection() {
  const featuredWorkItems = workItems.filter((item) => item.featured);

  return (
    <HomeHorizontalSection
      id="work"
      title="Work"
      titleClassName={LANDING_SECTION_TITLE_CLASSNAME}
      viewAllHref="/work"
      viewAllAriaLabel="View work"
      storageKey="home.work.carousel.scrollLeft"
      items={featuredWorkItems}
      getItemKey={(workItem) => workItem.id}
      renderItem={(workItem) => <WorkCard workItem={workItem} />}
    />
  );
}
