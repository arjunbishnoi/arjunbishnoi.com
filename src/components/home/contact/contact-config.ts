import { socialLinks } from "@/lib/content/social-links";
import { cn } from "@/lib/utils";

export const socialPillClass = cn(
  "group relative flex min-h-[4rem] w-full items-center gap-3 rounded-[32px] px-6 py-4 text-left shadow-none",
  "pill-interactive transition-[background-color] duration-200 ease-out",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white",
);

export const iconSvgClass =
  "block h-5 w-5 shrink-0 fill-current md:h-[1.375rem] md:w-[1.375rem]";
export const iconLucideClass = "h-5 w-5 shrink-0 md:h-[1.375rem] md:w-[1.375rem]";

export const panelTransition = {
  type: "spring" as const,
  duration: 0.3,
  bounce: 0.1,
};

export const contactCardBaseClass =
  "bg-white dark:bg-white flex w-full flex-col rounded-[40px] border border-zinc-200/50 shadow-none dark:border-white/10";

export const contactDesktopCardClass = cn(
  contactCardBaseClass,
  "max-w-[24rem] px-5 py-5 md:max-w-[26rem] md:px-6 md:py-6 lg:max-w-[27rem] xl:max-w-[28.5rem] xl:px-8 xl:py-6",
);

export const contactFormListVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0 },
  },
};

export function createContactFormItemVariants(isDesktop: boolean) {
  return {
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      x: isDesktop ? 20 : 0,
      y: isDesktop ? 0 : -15,
      transition: { duration: 0.08, ease: "easeOut" as const },
    },
  };
}

export const socialCards = [
  {
    name: "GitHub",
    suffix: "/arjunbishnoi",
    href: socialLinks.github,
    kind: "brand" as const,
    brand: "github" as const,
    pillClassName:
      "bg-zinc-900 text-white hover:bg-black dark:bg-black dark:text-white dark:hover:bg-black",
    labelClassName: "text-white dark:text-white",
    suffixClassName: "text-white/65 dark:text-white/65",
  },
  {
    name: "LinkedIn",
    suffix: "/in/arjunbishnoi",
    href: socialLinks.linkedin,
    kind: "brand" as const,
    brand: "linkedin" as const,
    pillClassName:
      "bg-[#0A66C2] text-white hover:bg-[#0958a8] dark:bg-[#0A66C2] dark:text-white dark:hover:bg-[#0c78e1]",
    labelClassName: "text-white",
    suffixClassName: "text-white/70",
  },
  {
    name: "Behance",
    suffix: "/arjunbishnoi",
    href: socialLinks.behance,
    kind: "brand" as const,
    brand: "behance" as const,
    pillClassName:
      "bg-[#1769FF] text-white hover:bg-[#1158d6] dark:bg-[#1769FF] dark:text-white dark:hover:bg-[#3b82ff]",
    labelClassName: "text-white",
    suffixClassName: "text-white/70",
  },
  {
    name: "Resume",
    href: socialLinks.resume,
    kind: "resume" as const,
    pillClassName:
      "bg-zinc-500 text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-700",
    labelClassName: "text-white dark:text-white",
  },
  {
    name: "contact@arjunbishnoi.com",
    href: socialLinks.email,
    kind: "email" as const,
    pillClassName:
      "bg-zinc-500 text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-700",
    labelClassName: "text-white dark:text-white",
  },
] as const;
