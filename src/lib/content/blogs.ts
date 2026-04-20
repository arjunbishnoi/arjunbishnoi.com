import type { BlogPost } from "./types"
import { getBlogArticleBySlug } from "./blog-articles"

const uiDesignArticle = getBlogArticleBySlug("the-future-of-ui-design-in-2026")
const reactPerformanceArticle = getBlogArticleBySlug("optimizing-react-rendering-at-scale")
const accessibilityArticle = getBlogArticleBySlug("building-for-true-digital-accessibility")

export const blogs: BlogPost[] = [
  {
    id: "the-future-of-ui-design-in-2026",
    title: uiDesignArticle?.title ?? "The future of UI design in 2026",
    description:
      uiDesignArticle?.deck ??
      "Exploring upcoming trends in web interfaces, from spatial computing to hyper-minimalist neobrutalism. How AI is changing the way we interact with digital products.",
    image: uiDesignArticle?.image ?? "/blog-covers/design-systems.jpg",
    category: uiDesignArticle?.category ?? "Design",
    tags: uiDesignArticle?.tags ?? ["Design", "UX/UI"],
    date: uiDesignArticle?.cardDate ?? "10 Mar 2026",
    url: uiDesignArticle ? `/blog/${uiDesignArticle.slug}` : "#",
  },
  {
    id: "optimizing-react-rendering-at-scale",
    title: reactPerformanceArticle?.title ?? "Optimizing React rendering at scale",
    description:
      reactPerformanceArticle?.deck ??
      "Deep dive into advanced performance mechanics in React 19. How we reduced time-to-interactive by 40% using concurrent features and server components.",
    image: reactPerformanceArticle?.image ?? "/blog-covers/frontend-architecture.jpg",
    category: reactPerformanceArticle?.category ?? "Engineering",
    tags: reactPerformanceArticle?.tags ?? ["Engineering", "React"],
    date: reactPerformanceArticle?.cardDate ?? "28 Feb 2026",
    url: reactPerformanceArticle ? `/blog/${reactPerformanceArticle.slug}` : "#",
  },
  {
    id: "building-for-true-digital-accessibility",
    title: accessibilityArticle?.title ?? "Building for true digital accessibility",
    description:
      accessibilityArticle?.deck ??
      "Why WCAG compliance is just the baseline. Practical strategies for designing accessible experiences that work seamlessly for all users and modern devices.",
    image: accessibilityArticle?.image ?? "/blog-covers/product-design.jpg",
    category: accessibilityArticle?.category ?? "Product",
    tags: accessibilityArticle?.tags ?? ["A11y", "Web Design"],
    date: accessibilityArticle?.cardDate ?? "14 Jan 2026",
    url: accessibilityArticle ? `/blog/${accessibilityArticle.slug}` : "#",
  },
]
