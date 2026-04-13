"use client";

import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/lib/content/work";

export function FeaturedSection() {
  const featured = workItems.find((item) => item.featured) ?? workItems[0];

  return (
    <section className="home-stack-gap-after md:hidden pt-0 pb-0 bg-background">
      <div className="mx-auto max-w-7xl px-6 -mt-2 md:mt-0">
        <Link
          href={featured.url}
          className="project-card-link group block rounded-none h-full focus:outline-none"
          aria-label={`View ${featured.title}`}
        >
          {/* Square cover image only (no title/category on mobile) */}
          <div className="cover-card-interactive aspect-square relative overflow-hidden rounded-[40px] bg-muted">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="project-card-media object-cover"
              sizes="(max-width: 768px) 100vw"
              priority
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
