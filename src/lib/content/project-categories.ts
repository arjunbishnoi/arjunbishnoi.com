export const projectCategories = [
  "All",
  "Mobile Apps",
  "AI/ML",
  "Design",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
