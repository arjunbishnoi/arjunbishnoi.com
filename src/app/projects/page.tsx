import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects } from "@/lib/site-data"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects — Arjun Bishnoi",
  description: "Explore my portfolio of web development and design projects showcasing a range of skills and technologies.",
  openGraph: {
    title: "Projects — Arjun Bishnoi",
    description: "Explore my portfolio of web development and design projects showcasing a range of skills and technologies.",
    url: "https://arjunbishnoi.com/projects",
    images: [{ url: "https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Arjun Bishnoi",
    description: "Explore my portfolio of web development and design projects showcasing a range of skills and technologies.",
    images: ["https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg"],
  },
}

export default function ProjectsPage() {
  const featuredProject = projects.find(p => p.featured) || projects[0]
  
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      
      {/* Header with animated gradient underline */}
      <div className="pt-8 pb-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Projects
              <span className="block text-xl text-primary mt-2">My work and contributions</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Explore a curated selection of my projects, showcasing my skills in full-stack development, UI/UX design, and mobile app creation.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        {/* Featured Project */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Project</h2>
            <div className="h-px flex-grow bg-border ml-4"></div>
          </div>
          <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-xl transition-all duration-300 hover:shadow-primary/10 group">
            <div className="h-80 relative overflow-hidden bg-muted">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/40 mix-blend-overlay pointer-events-none"></div>
            </div>
            <div className="p-8 md:p-10">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{featuredProject.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={featuredProject.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors group/link">
                    View Source Code
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">All Projects</h2>
            <div className="h-px flex-grow bg-border ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project) => (
               <ProjectCard
                 key={project.id}
                 project={project}
               />
             ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
