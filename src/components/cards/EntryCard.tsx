import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ENTRY_CATEGORY_PILL_TEXT_CLASSNAME,
  ENTRY_DATE_TEXT_CLASSNAME,
  ENTRY_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";

type EntryCardProps = {
  title: string;
  image: string;
  category?: string;
  date?: string;
  fallbackCategory: string;
  url?: string;
  linkClassName: string;
  mediaClassName: string;
  ariaLabelPrefix: string;
  footer?: ReactNode;
};

export function EntryCard({
  title,
  image,
  category,
  date,
  fallbackCategory,
  url,
  linkClassName,
  mediaClassName,
  ariaLabelPrefix,
  footer,
}: EntryCardProps) {
  const resolvedCategory = category ?? fallbackCategory;
  const linkUrl = url && url !== "#" ? url : null;

  const cardContent = (
    <>
      <div className="cover-card-interactive aspect-square relative overflow-hidden bg-muted rounded-[40px] mb-[1.125rem]">
        <Image
          src={image}
          alt={title}
          fill
          className={`${mediaClassName} object-cover`}
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow pt-1">
        <h3
          className={`${ENTRY_TITLE_CLASSNAME} line-clamp-2 pb-[0.08em] mb-3`}
        >
          {title}
        </h3>

        <div className="mb-2 flex items-center gap-3">
          <span className={ENTRY_CATEGORY_PILL_TEXT_CLASSNAME}>
            {resolvedCategory}
          </span>
          {date ? <span className={ENTRY_DATE_TEXT_CLASSNAME}>{date}</span> : null}
        </div>

        {footer}
      </div>
    </>
  );

  if (!linkUrl) {
    return (
      <div className="rounded-none overflow-hidden h-full flex flex-col">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={linkUrl}
      className={`${linkClassName} group block rounded-none h-full focus:outline-none`}
      aria-label={`${ariaLabelPrefix} ${title}`}
    >
      <div className="flex h-full flex-col">{cardContent}</div>
    </Link>
  );
}
