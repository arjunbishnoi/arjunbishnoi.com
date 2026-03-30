export type HeroEducationItem = {
  title: string
  institution: string
  credential: string
  ongoing?: boolean
}

export const heroProfessionalTitles = [
  "Cross-platform App Developer",
  "UI/UX Designer",
  "AI Engineer",
] as const

export const heroDescription =
  "Developer and designer building cross-platform mobile apps at the intersection of AI and design. Functional, intelligent, and crafted with precision."

export const heroEducationItems: HeroEducationItem[] = [
  {
    title: "Applied A.I. Solutions Development",
    institution: "George Brown College, Toronto",
    credential: "Postgraduate",
    ongoing: true,
  },
  {
    title: "Mobile Application Development and Strategy",
    institution: "George Brown College, Toronto",
    credential: "Postgraduate",
  },
  {
    title: "B.Sc. Information Technology",
    institution: "Amity University, Noida",
    credential: "Bachelor's Degree",
  },
]
