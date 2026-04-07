"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/content/projects";
import { HomeHorizontalSection } from "@/components/home/HomeHorizontalSection";
import { LANDING_SECTION_TITLE_CLASSNAME } from "@/lib/home-title-styles";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <HomeHorizontalSection
      id="projects"
      title="Projects"
      titleClassName={LANDING_SECTION_TITLE_CLASSNAME}
      viewAllHref="/projects"
      viewAllAriaLabel="View all projects"
      storageKey="home.projects.carousel.scrollLeft"
      items={featuredProjects}
      getItemKey={(project) => project.id}
      renderItem={(project) => <ProjectCard project={project} />}
    />
  );
}
