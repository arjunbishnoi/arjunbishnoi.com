import type { NavigationItem } from "./types"
import { socialLinks } from "./social-links"

export const mainLinks: NavigationItem[] = [
  { name: "Projects", href: "/projects" },
  { name: "Mobile Apps", href: "/apps" },
  { name: "AI/ML", href: "/ai" },
  { name: "Design", href: "/design" },
  { name: "Resume", href: socialLinks.resume, isDownload: true, downloadName: socialLinks.resumeDownloadName },
  { name: "Contact", href: "/#contact" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
]
