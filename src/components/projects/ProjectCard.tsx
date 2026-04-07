import Image from "next/image"
import {
  BLOG_POST_BODY_TEXT_CLASSNAME,
  ENTRY_CATEGORY_PILL_TEXT_CLASSNAME,
  ENTRY_TITLE_CLASSNAME,
} from "@/lib/home-title-styles"

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
        className="aspect-square relative overflow-hidden bg-muted rounded-[40px] mb-4 neu-pressed"
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
        <h3 className={`${ENTRY_TITLE_CLASSNAME} line-clamp-2 pb-[0.08em] mb-3`}>
          {project.title}
        </h3>
        
        <p className={`${BLOG_POST_BODY_TEXT_CLASSNAME} mb-4 line-clamp-2`}>
          {shortSubtitle}
        </p>
        
        <div className="mb-2">
          <span className={`inline-block rounded-full bg-black/5 px-4 py-1 dark:bg-white/10 ${ENTRY_CATEGORY_PILL_TEXT_CLASSNAME}`}>
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
