export type BlogArticleSection = {
  title: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  deck: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  publishedLabel: string;
  cardDate: string;
  author: string;
  introduction: string[];
  sections: BlogArticleSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "the-future-of-ui",
    title: "The Future of UI Design in 2026",
    description:
      "Exploring upcoming interface patterns, from calmer interaction models to more adaptive product systems. How AI is changing the way digital experiences are structured and refined.",
    deck:
      "Why the next wave of interface design will feel less decorative, more adaptive, and much more intentional.",
    image: "/blog-covers/design-systems.jpg",
    category: "Design",
    tags: ["Design", "UX/UI"],
    publishedAt: "2026-03-10",
    publishedLabel: "March 10, 2026",
    cardDate: "10 Mar 2026",
    author: "Arjun Bishnoi",
    introduction: [
      "Most interface trend reports confuse surface treatment with actual direction. Rounded corners get swapped for harder ones, glossy gradients disappear for a year, someone announces the return of minimalism, and the cycle repeats. The more useful question is not what styles are fashionable. It is what pressures products are responding to.",
      "In 2026, the strongest UI work is being shaped by density, adaptability, and trust. Screens have to explain more, react faster, and still feel composed. That means the future of interface design is less about louder visuals and more about systems that can scale without becoming noisy.",
    ],
    sections: [
      {
        title: "Interfaces are shifting from static layouts to adaptive systems",
        paragraphs: [
          "The old model assumed a page could be carefully composed for one canonical state. That model breaks down once products become personalized, AI-assisted, and highly conditional. Modern interfaces need components that remain coherent while the content, hierarchy, and level of detail change underneath them.",
          "The strongest systems are built around controlled flexibility. They define rhythm, spacing, and semantic importance clearly enough that a screen can absorb change without collapsing into inconsistency. Design systems are becoming less like pattern libraries and more like rules for maintaining visual judgment at scale.",
        ],
      },
      {
        title: "Typography is doing more of the product work",
        paragraphs: [
          "As interfaces get denser, typography has to carry more clarity. Weight, width, spacing, and line length now do the job that decorative chrome used to do. A strong type system can separate primary action, secondary context, and long-form explanation without resorting to constant borders, badges, and background panels.",
          "This is one reason many modern products feel quieter than they did a few years ago. The quietness is not emptiness. It is hierarchy being handled by type instead of ornament. When typography is disciplined, the rest of the screen can afford to step back.",
        ],
      },
      {
        title: "Motion is becoming more editorial and less performative",
        paragraphs: [
          "The best motion work today is not about delight in isolation. It is about helping people track state changes. As products introduce streamed content, progressive disclosure, and AI-generated output, animation becomes a readability tool. Good motion tells the user what changed, where it came from, and what deserves attention next.",
          "That favors slower, more purposeful transitions over constant micro-interactions. Interfaces are learning to move like editing, not like decoration. The result feels more mature and more legible, especially in tools that support longer sessions.",
        ],
      },
      {
        title: "AI is changing the structure of screens, not just their features",
        paragraphs: [
          "Adding an AI button does not change a product category. What changes the product is when the interface starts accommodating uncertainty, iteration, and conversational refinement. That means more products are designing for partial answers, evolving states, and collaborative workflows instead of fixed sequences.",
          "These changes affect layout directly. Screens need space for drafts, side-by-side comparison, reasoning, and interruption. Traditional dashboard patterns are often too rigid for that. The most future-facing UI work is building layouts that can hold generation, review, and action in the same surface without losing composure.",
        ],
      },
      {
        title: "Visual identity still matters, but it has to survive repetition",
        paragraphs: [
          "A brand can no longer rely on one hero moment to carry the whole experience. Most digital products are used repeatedly, across workflows, and under pressure. The design language has to hold up inside data-heavy screens, complex settings, and long-form reading states, not just on the landing page.",
          "That is pushing visual identity toward subtler but more durable decisions: distinctive typography, disciplined spacing, strong contrast behavior, and a clear point of view on interaction. The most memorable products are the ones whose identity still reads after the novelty wears off.",
        ],
      },
      {
        title: "The next standard is composure under complexity",
        paragraphs: [
          "The interfaces that will age best are not the ones chasing novelty hardest. They are the ones that make complexity feel calm. When a product can present dense information, dynamic states, and AI-powered behaviors without feeling brittle or chaotic, it earns trust.",
          "That is the real direction of UI design right now. Not maximalism or minimalism in isolation, but control. Better systems, stronger type, cleaner rhythm, and layouts that remain intelligent as the product around them evolves.",
        ],
      },
    ],
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Rendering at Scale",
    description:
      "Deep dive into advanced performance mechanics in React 19. How we reduced time-to-interactive by 40% using concurrent features and server components.",
    deck:
      "How we reduced time-to-interactive and fixed input lag in a growing React 19 product.",
    image: "/blog-covers/frontend-architecture.jpg",
    category: "Engineering",
    tags: ["Engineering", "React"],
    publishedAt: "2026-02-28",
    publishedLabel: "February 28, 2026",
    cardDate: "28 Feb 2026",
    author: "Arjun Bishnoi",
    introduction: [
      "Performance work gets framed as a React problem far too often. In practice, most slow interfaces come from coordination problems: too much work happening on the client, too much state changing at once, and too little clarity around which updates are actually urgent to the person holding the device.",
      "The app we were tuning had grown into a dense operating surface with live filters, large result sets, background hydration, and multiple views competing for the same render budget. The goal was not to make every component mathematically optimal. The goal was to make the product feel immediate.",
    ],
    sections: [
      {
        title: "Measure interaction pressure, not render counts",
        paragraphs: [
          "Counting renders is useful for debugging, but it is a weak product metric. A component can render often and still feel fast. A screen can render only a handful of times and still feel broken if the wrong work blocks a search field, a filter tap, or the first paint of a dense list.",
          "We started by tracing moments that users actually notice: keypress latency, filter response time, visible list stabilization, and the delay between route change and meaningful content. That reframed the work immediately. The biggest regressions were not isolated in a single component tree. They were caused by several medium-cost updates landing together.",
        ],
      },
      {
        title: "Separate urgent updates from expensive work",
        paragraphs: [
          "React 19 gives you a cleaner vocabulary for urgency. We used transitions to mark non-blocking updates, deferred values to keep high-frequency inputs responsive, and tighter ownership boundaries so view recomposition did not spill into unrelated panels.",
          "That changed the rhythm of the app. Search input stayed immediate while filtering, sorting, and secondary summaries caught up a beat later. Users rarely object to staged updates when the interface makes the sequence legible. They do object when typing feels sticky.",
        ],
      },
      {
        title: "Stabilize the surface area before memoizing it",
        paragraphs: [
          "Memoization is not a strategy. It is a tax you take on when the data flow is already stable. Before adding any memo-related fixes, we flattened prop churn, normalized object creation at the edges, and removed state that existed only to echo other state.",
          "That alone eliminated a large share of waste. Once the surface area stopped shifting on every render, the remaining hotspots became obvious and far fewer targeted optimizations were needed. The result was simpler than the defensive useMemo and useCallback blanket we had originally considered.",
        ],
      },
      {
        title: "Move predictable work to the server",
        paragraphs: [
          "A surprising amount of client work was simply assembly work: shaping data for cards, merging duplicate fetch paths, and preparing summaries that did not need to wait for browser execution. Server components let us move those predictable transforms closer to the data and ship a thinner client tree.",
          "The key was being strict about ownership. If a concern needed live client state, we kept it client-side. If it was deterministic and view-driven, we pulled it back to the server. That avoided the common trap of creating blurry boundaries that are hard to reason about later.",
        ],
      },
      {
        title: "Let the interface reveal work in stages",
        paragraphs: [
          "Performance is partly a systems problem and partly a presentation problem. We redesigned loading and update states so the interface always acknowledged progress. Primary content resolved first. Supporting summaries, charts, and secondary controls filled in after. That made the app feel calmer even before the underlying trace improved.",
          "This also forced better product discipline. If a panel could appear later without hurting comprehension, it probably should not block the first useful frame. Treating hierarchy as a performance tool gave us cleaner layouts and faster perceived speed at the same time.",
        ],
      },
      {
        title: "The operating rules we kept",
        paragraphs: [
          "After the refactor, we wrote down a handful of rules and used them as review criteria. The point was to stop the same regressions from returning six weeks later under deadline pressure.",
        ],
      },
    ],
  },
  {
    slug: "building-for-accessibility",
    title: "Building for True Digital Accessibility",
    description:
      "Why WCAG compliance is only the starting point. Practical ways to design and build interfaces that remain usable, readable, and resilient across real-world conditions.",
    deck:
      "Accessibility becomes real when usability holds up outside ideal conditions, not just inside audit checklists.",
    image: "/blog-covers/product-design.jpg",
    category: "Product",
    tags: ["A11y", "Web Design"],
    publishedAt: "2026-01-14",
    publishedLabel: "January 14, 2026",
    cardDate: "14 Jan 2026",
    author: "Arjun Bishnoi",
    introduction: [
      "Accessibility is still too often treated like a legal requirement or a cleanup phase. Teams ask whether a product passes, not whether it is actually easy to use when vision is strained, attention is divided, motion is uncomfortable, or input is imprecise. That mindset produces compliant experiences that still feel hostile in practice.",
      "The better standard is much simpler: can someone complete the task with confidence under real conditions. Once you design for that question, accessibility stops being a side checklist and becomes part of product quality itself.",
    ],
    sections: [
      {
        title: "Compliance is a baseline, not a user experience",
        paragraphs: [
          "WCAG matters because it gives teams a common language and a defensible floor. But a floor is not the same thing as a good product. It is entirely possible to satisfy technical requirements while still producing layouts that are tiring to scan, controls that are hard to target, and flows that demand too much memory from the user.",
          "The teams that get accessibility right treat guidelines as a starting framework. They use them to remove obvious barriers, then continue refining the interaction until it feels stable, clear, and forgiving. That second step is where most of the real usability value lives.",
        ],
      },
      {
        title: "Readability depends on rhythm as much as contrast",
        paragraphs: [
          "Contrast gets attention because it is measurable, but readability is broader than contrast ratios. Line length, heading cadence, paragraph spacing, and predictable alignment have an enormous effect on whether content feels easy to process. A visually valid page can still be cognitively exhausting if the rhythm is poor.",
          "This is especially obvious in long-form or information-dense products. When hierarchy is noisy, users must repeatedly rediscover what matters. When hierarchy is calm, the interface supports comprehension instead of taxing it.",
        ],
      },
      {
        title: "Input design has to account for hesitation",
        paragraphs: [
          "Many interfaces assume users act with precision and certainty. Real users hesitate, correct themselves, and approach controls from less-than-perfect contexts. Accessible input design means larger targets, clearer labels, forgiving validation, and state changes that are announced without causing panic.",
          "That is why forms are such a reliable measure of maturity. If a product handles mistakes gracefully, preserves context, and communicates recovery clearly, it usually performs better for everyone, not just for users with permanent impairments.",
        ],
      },
      {
        title: "Motion, sound, and feedback need escape hatches",
        paragraphs: [
          "Accessibility is not only visual. Motion can disorient, sound can intrude, and aggressive feedback can overwhelm. Products should assume some users need less stimulation, slower change, or more control over how state is communicated.",
          "This is where restraint matters. Interfaces that acknowledge reduced motion, avoid unnecessary autoplay, and make feedback predictable tend to feel more trustworthy. The user should never feel ambushed by the product.",
        ],
      },
      {
        title: "Accessible design gets stronger when it is tested in context",
        paragraphs: [
          "Automated audits catch real issues, but they cannot tell you whether a screen is mentally exhausting on a phone outdoors, whether a keyboard path feels coherent, or whether the spoken order of content matches the visual story. Those things show up only when the team actually uses the interface under varied conditions.",
          "The fastest way to raise the bar is to build accessibility checks into regular design and QA rituals. Test with zoom, keyboard-only navigation, reduced motion, screen readers, and low-attention scenarios before release. That changes the product faster than a yearly accessibility review ever will.",
        ],
      },
      {
        title: "The real goal is confidence",
        paragraphs: [
          "True accessibility is not only about access. It is about confidence. A person should feel that the interface is understandable, recoverable, and built with enough care that they are not one mistake away from getting lost.",
          "When products create that feeling, they become better for everybody. They are easier to scan, more forgiving to use, and more resilient in edge cases. Accessibility is not the cost of making a product inclusive. It is one of the clearest ways to make a product good.",
        ],
      },
    ],
  },
];

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
