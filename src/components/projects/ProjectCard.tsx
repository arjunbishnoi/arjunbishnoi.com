import Image from "next/image"

interface ProjectProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    sourceUrl: string
  }
  showDate?: boolean
}

export function ProjectCard({ project, showDate = false }: ProjectProps) {
  // Extract a subtitle or create a short one from the description, and determine a category/date.
  // We'll mock a category and date since they aren't directly in the site-data yet.
  const shortSubtitle = project.description.split('.')[0] + '.'; 
  const category = project.tags && project.tags.length > 0 ? project.tags[0] : "Project";
  const dateStr = project.id === "cryptotracker" ? "12 Nov 2024" : project.id === "4rent" ? "05 Mar 2023" : "22 Jul 2022";

  return (
    <div className="rounded-none overflow-hidden h-full flex flex-col">
      <div 
        className="aspect-square relative overflow-hidden bg-muted rounded-2xl mb-4 neu-pressed"
        style={{ '--neu-surface': 'var(--projects-surface, var(--background))' } as React.CSSProperties}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="flex flex-col flex-grow pt-1">
        <h3 className="text-xl md:text-2xl text-black dark:text-white font-bold line-clamp-1 mb-2">
          {project.title}
        </h3>
        
        <p className="text-xl md:text-2xl text-foreground mb-4">
          {shortSubtitle}
        </p>
        
        <div className="mb-2">
          <span className="inline-block text-sm md:text-base text-foreground/80 bg-muted/80 rounded-full px-4 py-1">
            {category}
          </span>
        </div>
        
        {showDate && (
          <div className="text-sm md:text-base text-muted-foreground">
            {dateStr}
          </div>
        )}
      </div>
    </div>
  )
}
