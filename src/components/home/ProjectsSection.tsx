"use client"

import { projects } from "@/lib/site-data"
import { StickyHeader } from "@/components/layout/StickyHeader"
import { ProjectCard } from "@/components/projects/ProjectCard"

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="relative py-0 bg-background">
      {/* Sticky header */}
      <StickyHeader title="Projects" to="/projects" />
      
      {/* Projects content */}
      <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-8 pb-24">
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
