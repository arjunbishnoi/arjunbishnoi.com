"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

import { projects } from "@/lib/site-data"
import { ProjectCard } from "@/components/projects/ProjectCard"

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="relative py-0 bg-background">
      {/* Static Full-Width Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 pt-2 md:pt-10 lg:pt-12">
        <div className="flex items-center justify-between w-full relative">
          
          {/* Title Left */}
          <div className="flex items-center pr-4 pb-1">
            <span className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground leading-normal">
              Projects
            </span>
          </div>

          {/* Button Right */}
          <Link
            href="/projects"
            className="group flex-none relative transition-all duration-300 ease-out"
            aria-label="View all projects"
          >
            <div
              className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-transform duration-300 active:scale-95 neu-raised"
              style={{
                "--neu-shadow-distance": "4px",
                "--neu-shadow-blur": "8px"
              } as React.CSSProperties}
            >
              <div
                className="absolute inset-[3px] md:inset-[4px] rounded-full pointer-events-none dark:bg-white bg-black"
                style={{
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.5), inset -1px -1px 3px rgba(255,255,255,0.15)",
                }}
              />
              <span className="relative z-10 transition-colors duration-300 text-white dark:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 md:w-6 md:h-6"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </Link>
          
        </div>
      </div>
      
      {/* Projects content */}
      <div className="mx-auto max-w-7xl px-0 pt-4 lg:px-8 pb-10">
        <div 
          className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 scroll-pl-6 scroll-pr-6 md:scroll-pl-0 md:scroll-pr-0 pb-4 md:pb-0 scrollbar-hide"
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
