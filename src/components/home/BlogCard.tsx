import { EntryCard } from "@/components/cards/EntryCard";

interface BlogProps {
  blog: {
    id: string;
    title: string;
    description: string;
    image: string;
    category?: string;
    tags: string[];
    date: string;
    url: string;
  };
}

export function BlogCard({ blog }: BlogProps) {
  const category =
    blog.category ??
    (blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Blog");

  return (
    <EntryCard
      title={blog.title}
      image={blog.image}
      category={category}
      date={blog.date}
      fallbackCategory="Blog"
      url={blog.url}
      linkClassName="blog-card-link"
      mediaClassName="blog-card-media"
      ariaLabelPrefix="Read"
    />
  );
}
