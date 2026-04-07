export const blogCategories = [
  "All",
  "Mobile Apps",
  "AI/ML",
  "Design",
  "Development",
  "Product",
  "Philosophy",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
