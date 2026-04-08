import Link from "next/link";
import Image from "next/image";
import {
  BLOG_POST_BODY_TEXT_CLASSNAME,
  ENTRY_CATEGORY_PILL_TEXT_CLASSNAME,
  ENTRY_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    category?: string;
    tags: string[];
    date: string;
    url: string;
    sourceUrl: string;
  };
  showDate?: boolean;
}

export function ProjectCard({ project, showDate = false }: ProjectProps) {
  const shortSubtitle = project.description.split(".")[0] + ".";
  const category =
    project.category ??
    (project.tags && project.tags.length > 0 ? project.tags[0] : "Project");
  const isLinked = project.url && project.url !== "#";

  const cardContent = (
    <>
      <div className="aspect-square relative overflow-hidden bg-muted rounded-[40px] mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="project-card-media object-cover transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow pt-1">
        <h3
          className={`${ENTRY_TITLE_CLASSNAME} line-clamp-2 pb-[0.08em] mb-3`}
        >
          {project.title}
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

        {showDate && (
          <div className="text-sm md:text-base text-muted-foreground">
            {project.date}
          </div>
        )}
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
      href={project.url}
      className="project-card-link group block rounded-none overflow-hidden h-full focus:outline-none"
      aria-label={`View ${project.title}`}
    >
      <div className="flex h-full flex-col">{cardContent}</div>
    </Link>
  );
}
