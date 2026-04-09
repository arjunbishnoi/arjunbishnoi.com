import { EntryCard } from "@/components/cards/EntryCard";

interface ProjectProps {
  workItem: {
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

type WorkCardProps = ProjectProps;

export function WorkCard({ workItem, showDate = false }: WorkCardProps) {
  const category =
    workItem.category ??
    (workItem.tags && workItem.tags.length > 0 ? workItem.tags[0] : "Work");

  return (
    <EntryCard
      title={workItem.title}
      description={workItem.description}
      image={workItem.image}
      category={category}
      fallbackCategory="Work"
      url={workItem.url}
      linkClassName="project-card-link"
      mediaClassName="project-card-media"
      ariaLabelPrefix="View"
      footer={
        showDate ? (
          <div className="text-sm md:text-base text-muted-foreground">
            {workItem.date}
          </div>
        ) : undefined
      }
    />
  );
}
