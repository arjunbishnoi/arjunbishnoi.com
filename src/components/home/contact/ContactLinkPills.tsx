import { ArrowUpRight, AtSign, Download } from "lucide-react";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { cn } from "@/lib/utils";
import {
  iconLucideClass,
  iconSvgClass,
  socialCards,
  socialPillClass,
} from "@/components/home/contact/contact-config";

export function ContactLinkPills() {
  return (
    <>
      {socialCards.map((card) => (
        <a
          key={card.name}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(socialPillClass, card.pillClassName)}
          aria-label={
            card.kind === "resume"
              ? "View resume"
              : card.kind === "email"
                ? `Email ${card.name}`
                : `${card.name} profile`
          }
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {card.kind === "brand" ? (
              <SocialBrandIcon brand={card.brand} className={iconSvgClass} />
            ) : card.kind === "resume" ? (
              <Download
                className={iconLucideClass}
                strokeWidth={1.85}
                aria-hidden
              />
            ) : (
              <AtSign
                className={iconLucideClass}
                strokeWidth={1.85}
                aria-hidden
              />
            )}
            <span className="flex min-w-0 items-center gap-1 truncate text-[0.95rem] font-semibold tracking-tight">
              <span className={cn("shrink-0", card.labelClassName)}>
                {card.name}
              </span>
              {"suffix" in card && card.suffix ? (
                <span
                  className={cn("truncate font-normal", card.suffixClassName)}
                >
                  {card.suffix}
                </span>
              ) : null}
            </span>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0"
            strokeWidth={2.5}
            aria-hidden
          />
        </a>
      ))}
    </>
  );
}
