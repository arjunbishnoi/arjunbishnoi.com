import type { NavigationItem } from "./types"
import { socialLinks } from "./social-links"

export const mainLinks: NavigationItem[] = [
  { name: "Work", href: "/work" },
  { name: "Mobile Apps", href: "/apps" },
  { name: "AI/ML", href: "/ai" },
  { name: "Design", href: "/design" },
  { name: "Resume", href: socialLinks.resume },
  { name: "Contact", href: "/#contact" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
]
