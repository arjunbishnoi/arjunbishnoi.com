"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects } from "@/lib/content/projects"

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="home-stack-gap-after relative py-0 bg-background">
      {/* Static Full-Width Header — no top padding <md; gap from Featured is margin-only */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-3 sm:pb-4 md:pb-10 lg:pb-14 pt-0 md:pt-16 lg:pt-20">
        <div className="flex items-center justify-between md:justify-center md:gap-8 w-full relative">
          
          {/* Title (Centered on md+) */}
          <h2 className="font-sans font-semibold text-black dark:text-white leading-[1.02] tracking-[-0.02em] sm:tracking-[-0.035em] md:tracking-[-0.04em] lg:tracking-[-0.038em] text-[2.2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            Projects
          </h2>

          {/* View all pill (matches home bio CTA) */}
          <Link
            href="/projects"
            className={cn(
              "flex-none flex items-center justify-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[0.85rem] font-medium",
              "dark:bg-white dark:text-black",
              "transition-transform duration-200 active:scale-[0.98]"
            )}
            aria-label="View all projects"
          >
            View all
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>
          
        </div>
      </div>
      
      {/* Projects content */}
      <div className="mx-auto max-w-7xl px-0 pt-4 lg:px-8 pb-0 md:pb-6">
        <div 
          className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 scroll-pl-6 scroll-pr-6 md:scroll-pl-0 md:scroll-pr-0 pb-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera via hidden style block */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {featuredProjects.map((project, index) => {
            const isLast = index === featuredProjects.length - 1;
            return (
              <div 
                key={project.id} 
                className={cn(
                  "snap-always w-[78vw] flex-none md:w-auto",
                  isLast ? "snap-end" : "snap-start"
                )}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
          
          {/* Spacer to guarantee right padding for iOS Safari */}
          <div className="w-[1px] shrink-0 md:hidden" />
        </div>
      </div>
    </section>
  )
}
