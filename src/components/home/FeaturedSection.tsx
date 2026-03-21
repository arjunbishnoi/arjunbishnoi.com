"use client"

import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/site-data"

export function FeaturedSection() {
  // Pick the first featured project (Cryptocurrency Tracker)
  const featured = projects.find(p => p.featured) ?? projects[0]

  return (
    <section className="home-stack-gap-after md:hidden pt-0 pb-0 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Link href={featured.sourceUrl} target="_blank" rel="noopener noreferrer">
          {/* Square cover image only (no title/category on mobile) */}
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
        </Link>
      </div>
    </section>
  )
}
