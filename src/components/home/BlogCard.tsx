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
  const category = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Blog";

  return (
    <div className="rounded-none overflow-hidden h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden bg-muted rounded-[40px] mb-4">
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
        <h3 className="text-xl md:text-2xl text-black dark:text-white font-bold mb-4">
          {blog.title}
        </h3>
        
        <div className="mb-2">
          <span className="inline-block text-sm md:text-base text-foreground/80 bg-black/5 dark:bg-white/10 rounded-full px-4 py-1">
            {category}
          </span>
        </div>
      </div>
    </div>
  )
}
