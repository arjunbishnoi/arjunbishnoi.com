"use client"

import Link from "next/link"

import { projects } from "@/lib/site-data"
import { ProjectCard } from "@/components/projects/ProjectCard"

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="relative py-0 bg-background">
      {/* Static Full-Width Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 pt-10">
        <div className="flex items-center justify-between w-full relative">
          
          {/* Title Left */}
          <div className="overflow-hidden flex items-center pr-4">
            <span className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
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
      <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
