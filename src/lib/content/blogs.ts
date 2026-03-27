import type { BlogPost } from "./types"

export const blogs: BlogPost[] = [
  {
    id: "the-future-of-ui",
    title: "The Future of UI Design in 2026",
    description:
      "Exploring upcoming trends in web interfaces, from spatial computing to hyper-minimalist neobrutalism. How AI is changing the way we interact with digital products.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    tags: ["Design", "UX/UI"],
    date: "10 Mar 2026",
    url: "#",
  },
  {
    id: "optimizing-react-performance",
    title: "Optimizing React Rendering at Scale",
    description:
      "Deep dive into advanced performance mechanics in React 19. How we reduced time-to-interactive by 40% using concurrent features and server components.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Engineering", "React"],
    date: "28 Feb 2026",
    url: "#",
  },
  {
    id: "building-for-accessibility",
    title: "Building for True Digital Accessibility",
    description:
      "Why WCAG compliance is just the baseline. Practical strategies for designing accessible experiences that work seamlessly for all users and modern devices.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop",
    tags: ["A11y", "Web Design"],
    date: "14 Jan 2026",
    url: "#",
  },
]
