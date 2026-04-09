const mobileAppKeywords = [
  "mobile app",
  "mobile apps",
  "react native",
  "expo",
  "swiftui",
  "ios",
  "kotlin",
  "android",
] as const;

const aiKeywords = [
  "ai",
  "ai/ml",
  "ml",
  "machine learning",
  "artificial intelligence",
  "llm",
  "openai",
  "langchain",
  "pytorch",
  "tensorflow",
] as const;

const designKeywords = [
  "design",
  "ui",
  "ux",
  "ui/ux",
  "web design",
  "product design",
  "figma",
] as const;

export const segmentKeywords = {
  apps: [...mobileAppKeywords],
  ai: [...aiKeywords],
  design: [...designKeywords],
} as const;

export const categoryKeywords = {
  "Mobile Apps": [...mobileAppKeywords],
  "AI/ML": [...aiKeywords],
  Design: [...designKeywords],
} as const;
