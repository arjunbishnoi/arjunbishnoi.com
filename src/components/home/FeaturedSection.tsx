"use client"

import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/site-data"

export function FeaturedSection() {
  // Pick the first featured project (Cryptocurrency Tracker)
  const featured = projects.find(p => p.featured) ?? projects[0]
  const category = featured.tags?.[0] ?? "Project"

  return (
    <section className="md:hidden pt-2 pb-14 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Link href={featured.sourceUrl} target="_blank" rel="noopener noreferrer">
          {/* Square cover image */}
          <div
            className="aspect-square relative overflow-hidden rounded-[40px] bg-muted"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
              priority
            />
          </div>

          {/* Title */}
          <h2 className="text-xl text-black dark:text-white font-bold mt-4 mb-4">
            {featured.title}
          </h2>

          {/* Category pill */}
          <span className="inline-block text-sm text-foreground/80 bg-black/5 dark:bg-white/10 rounded-full px-4 py-1">
            {category}
          </span>
        </Link>
      </div>
    </section>
  )
}
