import Link from "next/link";
import Image from "next/image";
import {
  BLOG_POST_BODY_TEXT_CLASSNAME,
  ENTRY_CATEGORY_PILL_TEXT_CLASSNAME,
  ENTRY_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";

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
  const shortSubtitle = blog.description.split(".")[0] + ".";
  const isLinked = blog.url && blog.url !== "#";

  const cardContent = (
    <>
      <div className="cover-card-interactive aspect-square relative overflow-hidden bg-muted rounded-[40px] mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="blog-card-media object-cover"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow pt-1">
        <h3
          className={`${ENTRY_TITLE_CLASSNAME} line-clamp-2 pb-[0.08em] mb-3`}
        >
          {blog.title}
        </h3>

        <p className={`${BLOG_POST_BODY_TEXT_CLASSNAME} mb-4 line-clamp-2`}>
          {shortSubtitle}
        </p>

        <div className="mb-2">
          <span
            className={`inline-block rounded-full bg-black/10 px-4 py-1 dark:bg-white/20 ${ENTRY_CATEGORY_PILL_TEXT_CLASSNAME}`}
          >
            {category}
          </span>
        </div>
      </div>
    </>
  );

  if (!isLinked) {
    return (
      <div className="rounded-none overflow-hidden h-full flex flex-col">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={blog.url}
      className="blog-card-link group block rounded-none h-full focus:outline-none"
      aria-label={`Read ${blog.title}`}
    >
      <div className="flex h-full flex-col">{cardContent}</div>
    </Link>
  );
}
