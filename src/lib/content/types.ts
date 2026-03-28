export type NavigationItem = {
  name: string
  href: string
  isDownload?: boolean
  downloadName?: string
}

export type SocialLinks = {
  github: string
  linkedin: string
  behance: string
  email: string
  resume: string
  resumeDownloadName: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  sourceUrl: string
  featured?: boolean
  challenge?: string
  solution?: string
}

export type SkillItem = {
  name: string
  level: string
  percentage: number
  details: string
}

export type SkillGroup = {
  name: string
  items: SkillItem[]
}

export type SkillCategory = {
  category: string
  groups: SkillGroup[]
}

export type ShortSkillGroup = {
  category: string
  items: string[]
}

export type HeroSkill = {
  name: string
  logoUrl: string
}

export type BlogPost = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  date: string
  url: string
}
