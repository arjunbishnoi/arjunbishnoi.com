"use client";

import { BlogCard } from "@/components/home/BlogCard";
import { blogs } from "@/lib/content/blogs";
import { HomeHorizontalSection } from "@/components/home/HomeHorizontalSection";
import { LANDING_SECTION_TITLE_CLASSNAME } from "@/lib/home-title-styles";

export function BlogSection() {
  return (
    <HomeHorizontalSection
      id="blog"
      title="Blog"
      titleClassName={LANDING_SECTION_TITLE_CLASSNAME}
      viewAllHref="/blog"
      viewAllAriaLabel="View all posts"
      storageKey="home.blog.carousel.scrollLeft"
      items={blogs}
      getItemKey={(blog) => blog.id}
      renderItem={(blog) => <BlogCard blog={blog} />}
    />
  );
}
