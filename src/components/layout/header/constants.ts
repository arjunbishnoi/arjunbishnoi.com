import { socialLinks } from "@/lib/content/social-links";

export const menuPanelTransition = {
  type: "spring" as const,
  duration: 0.3,
  bounce: 0.1,
};

export const mobileMenuPanelVariants = {
  open: { height: "auto" },
  closed: { height: "var(--navbar-height)" },
};

export const mobileMenuListVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0 },
  },
};

export const mobileMenuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.08, ease: "easeOut" as const },
  },
};

export const mobileMenuSocialVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.08, ease: "easeOut" as const },
  },
};

export const mobileMenuIconTopVariants = {
  open: { rotate: [0, 0, 45], y: [0, 4, 4] },
  closed: { rotate: [45, 0, 0], y: [4, 4, 0] },
};

export const mobileMenuIconBottomVariants = {
  open: { rotate: [0, 0, -45], y: [0, -4, -4] },
  closed: { rotate: [-45, 0, 0], y: [-4, -4, 0] },
};

export const menuSocialItems = [
  { name: "Behance", href: socialLinks.behance, brand: "behance" as const },
  { name: "GitHub", href: socialLinks.github, brand: "github" as const },
  {
    name: "LinkedIn",
    href: socialLinks.linkedin,
    brand: "linkedin" as const,
  },
] as const;

export const mobileLeftInset = 8;
export const mobileRightInset = 8;
