import Image from "next/image"

interface BlogProps {
  blog: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    date: string
    url: string
  }
}

export function BlogCard({ blog }: BlogProps) {
  // Use first sentence of description, similar to project cards
  const shortSubtitle = blog.description.split('.')[0] + '.'; 
  const category = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Blog";

  return (
    <div className="rounded-none overflow-hidden h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden bg-muted rounded-2xl mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="flex flex-col flex-grow pt-1">
        <h3 className="text-xl md:text-2xl text-black dark:text-white font-bold line-clamp-1 mb-2">
          {blog.title}
        </h3>
        
        <p className="text-xl md:text-2xl text-foreground mb-4">
          {shortSubtitle}
        </p>
        
        <div className="mb-2">
          <span className="inline-block text-sm md:text-base text-foreground/80 bg-muted/80 border border-border/50 rounded-full px-4 py-1">
            {category}
          </span>
        </div>
        
        <div className="text-sm md:text-base text-muted-foreground">
          {blog.date}
        </div>
      </div>
    </div>
  )
}
