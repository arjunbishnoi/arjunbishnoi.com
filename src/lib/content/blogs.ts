import type { BlogPost } from "./types"

export const blogs: BlogPost[] = [
  {
    id: "the-future-of-ui",
    title: "The Future of UI Design in 2026",
    description:
      "Exploring upcoming trends in web interfaces, from spatial computing to hyper-minimalist neobrutalism. How AI is changing the way we interact with digital products.",
    image: "/blog-covers/design-systems.jpg",
    category: "Design",
    tags: ["Design", "UX/UI"],
    date: "10 Mar 2026",
    url: "#",
  },
  {
    id: "optimizing-react-performance",
    title: "Optimizing React Rendering at Scale",
    description:
      "Deep dive into advanced performance mechanics in React 19. How we reduced time-to-interactive by 40% using concurrent features and server components.",
    image: "/blog-covers/frontend-architecture.jpg",
    category: "Development",
    tags: ["Engineering", "React"],
    date: "28 Feb 2026",
    url: "#",
  },
  {
    id: "building-for-accessibility",
    title: "Building for True Digital Accessibility",
    description:
      "Why WCAG compliance is just the baseline. Practical strategies for designing accessible experiences that work seamlessly for all users and modern devices.",
    image: "/blog-covers/product-design.jpg",
    category: "Product",
    tags: ["A11y", "Web Design"],
    date: "14 Jan 2026",
    url: "#",
  },
]
