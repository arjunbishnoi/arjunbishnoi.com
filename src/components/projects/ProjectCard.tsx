import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    sourceUrl: string
  }
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden h-full flex flex-col border border-border/50 hover:border-border transition-colors">
      <div className="h-48 relative overflow-hidden group bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Add colorful overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/40 mix-blend-overlay pointer-events-none" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-accent/10 text-accent font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors group"
          >
            Source Code
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
