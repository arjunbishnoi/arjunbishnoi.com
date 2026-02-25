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
}

export function ProjectCard({ project }: ProjectProps) {
  // Extract a subtitle or create a short one from the description, and determine a category/date.
  // We'll mock a category and date since they aren't directly in the site-data yet.
  const shortSubtitle = project.description.split('.')[0] + '.'; 
  const category = project.tags && project.tags.length > 0 ? project.tags[0] : "Project";
  const dateStr = project.id === "cryptotracker" ? "2024" : project.id === "4rent" ? "2023" : "2022";

  return (
    <div className="rounded-none overflow-hidden h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden bg-muted rounded-2xl mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="flex flex-col flex-grow px-1">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground line-clamp-1 mb-1">
          {project.title}
        </h3>
        
        <p className="text-lg md:text-xl text-muted-foreground font-normal mb-6">
          {shortSubtitle}
        </p>
        
        <div className="mt-auto flex items-center justify-between text-lg md:text-xl text-muted-foreground font-normal">
          <span>{category}</span>
          <span>{dateStr}</span>
        </div>
      </div>
    </div>
  )
}
