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
}

type WorkCardProps = ProjectProps;

export function WorkCard({ workItem }: WorkCardProps) {
  const category =
    workItem.category ??
    (workItem.tags && workItem.tags.length > 0 ? workItem.tags[0] : "Work");

  return (
    <EntryCard
      title={workItem.title}
      image={workItem.image}
      category={category}
      date={workItem.date}
      fallbackCategory="Work"
      url={workItem.url}
      linkClassName="project-card-link"
      mediaClassName="project-card-media"
      ariaLabelPrefix="View"
    />
  );
}
