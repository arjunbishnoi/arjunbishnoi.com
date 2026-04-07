export const projectCategories = [
  "All",
  "React Native",
  "SwiftUI",
  "Kotlin",
  "Firebase",
  "iOS",
  "Android",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
