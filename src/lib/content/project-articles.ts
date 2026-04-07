export type ProjectArticleSection = {
  title: string;
  paragraphs: string[];
};

export type ProjectArticle = {
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
  sourceUrl: string;
  introduction: string[];
  sections: ProjectArticleSection[];
};

export const projectArticles: ProjectArticle[] = [
  {
    slug: "cryptocurrency-tracker",
    title: "Cryptocurrency Tracker",
    description:
      "A mobile-first market tracker for live cryptocurrency prices, portfolio monitoring, and watchlist management with a clearer real-time product experience.",
    deck:
      "A React Native market app focused on live data clarity, portfolio visibility, and a fast mobile decision loop.",
    image: "/cryptotracker.jpeg",
    category: "React Native",
    tags: ["Mobile App", "React Native", "Expo", "Firebase", "CoinLore API"],
    publishedAt: "2026-03-18",
    publishedLabel: "March 18, 2026",
    cardDate: "18 Mar 2026",
    author: "Arjun Bishnoi",
    sourceUrl: "https://github.com/arjunbishnoi/CryptoTracker",
    introduction: [
      "Cryptocurrency Tracker started from a simple product gap. Most mobile crypto apps either overload the screen with market noise or hide the few signals people actually care about when they are checking prices quickly. The goal here was to build a calmer experience that keeps live pricing, watchlist movement, and personal holdings in the same flow without making the interface feel crowded.",
      "From the beginning, the project had two constraints. It needed to feel responsive with rapidly changing market data, and it needed to remain usable when the user was moving quickly between discovery and portfolio management. That shaped the architecture, the screen hierarchy, and the way data was synchronized across the app.",
    ],
    sections: [
      {
        title: "Product direction",
        paragraphs: [
          "The core product idea was to reduce friction between market awareness and personal action. Instead of treating charts, watchlists, and portfolio data as disconnected modules, the app brings them into one mobile workflow so users can scan movement, inspect a coin, and compare that movement against their own positions without context switching.",
          "That required a more editorial approach to information density. The interface favors strong hierarchy, quick-glance summaries, and clearly separated secondary detail so the product stays readable even when the data stream itself is volatile.",
        ],
      },
      {
        title: "System architecture",
        paragraphs: [
          "The app was built with React Native and Expo to keep the mobile stack efficient across platforms while preserving a fast iteration loop. Firebase handled persistence and real-time synchronization for user-specific data such as saved assets and portfolio state, while CoinLore API data powered public market information.",
          "Those concerns were kept deliberately separate. Market data is inherently volatile and externally sourced, while portfolio data is personal and stateful. Splitting those responsibilities made it easier to reason about freshness, fallback behavior, and how aggressively each layer should update.",
        ],
      },
      {
        title: "Interaction design",
        paragraphs: [
          "A large part of the work was deciding what should feel immediate on a small screen. The first layer of the UI surfaces price, movement, and watchlist context with minimal visual interruption. Deeper statistics are available, but they do not compete with the initial decision surface.",
          "That balance matters in finance products. When everything is highlighted, nothing is prioritized. The app uses restraint so users can move from scan to detail naturally instead of fighting a dashboard that tries to announce every metric at once.",
        ],
      },
      {
        title: "Realtime behavior and performance",
        paragraphs: [
          "Real-time interfaces can feel broken even when the data is technically current if updates cause visible instability. To avoid that, the data flow was tuned to reduce unnecessary churn and keep transitions predictable when values changed frequently.",
          "This made the app feel more trustworthy. Users do not only judge accuracy in products like this. They also judge whether the interface behaves with enough composure that they can read and act on the information comfortably.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The final result is a cleaner mobile market tracker that puts the right signals in front of the user quickly while still supporting deeper portfolio workflows. It also served as a strong exercise in balancing real-time data demands with product readability.",
          "As a project, it reflects the kind of mobile work I care about most: interfaces that stay fast, focused, and legible under changing conditions instead of relying on visual noise to feel sophisticated.",
        ],
      },
    ],
  },
  {
    slug: "4rent",
    title: "4rent",
    description:
      "A rental marketplace concept for browsing listings, comparing properties, and narrowing housing decisions through a more considered mobile search experience.",
    deck:
      "An iOS rental product designed to make property search feel more visual, filtered, and decision-oriented.",
    image: "/4rent.jpeg",
    category: "SwiftUI",
    tags: ["Mobile App", "SwiftUI", "Combine", "MVVM", "iOS"],
    publishedAt: "2026-02-06",
    publishedLabel: "February 6, 2026",
    cardDate: "06 Feb 2026",
    author: "Arjun Bishnoi",
    sourceUrl: "https://github.com/arjunbishnoi/4rent",
    introduction: [
      "4rent was shaped around a common frustration in rental search: most listing products make it easy to browse endlessly and surprisingly hard to compare options with confidence. Too many screens feel like infinite feeds with weak prioritization, even though housing decisions depend on quickly understanding price, location, amenities, and visual quality together.",
      "This project approached the problem as a product design and implementation challenge at the same time. The app needed to feel polished and native on iOS, but it also needed a structure that helped users move from casual browsing toward actual shortlist building.",
    ],
    sections: [
      {
        title: "Product framing",
        paragraphs: [
          "The experience centers on making listings feel scannable before they feel exhaustive. Large imagery, clear pricing emphasis, and concise property metadata help users sort promising options early instead of opening every listing just to discover the basics.",
          "That product decision matters because rental search is usually a narrowing process. The interface should help the user reduce uncertainty, not prolong it with unnecessary friction.",
        ],
      },
      {
        title: "Native iOS implementation",
        paragraphs: [
          "4rent was built with SwiftUI using MVVM and Combine so the app could stay declarative while still handling asynchronous view updates and state changes cleanly. That stack kept the presentation layer readable and made it easier to iterate on screen composition without accumulating too much controller-heavy logic.",
          "The architecture was especially useful for list-driven and detail-driven flows. Search state, selection state, and view updates could be coordinated without turning the product into a maze of tightly coupled screens.",
        ],
      },
      {
        title: "Listing and detail experience",
        paragraphs: [
          "The browsing layer focuses on images and rental essentials first, because those are the cues users use to decide whether a listing deserves attention. Detail views then expand into richer content with a more spacious layout, letting people evaluate a property without losing track of the basics that brought them there.",
          "This creates a clearer two-step rhythm: discover quickly, evaluate carefully. The app feels more intentional because it does not try to solve both tasks with one overloaded screen.",
        ],
      },
      {
        title: "Filtering and user intent",
        paragraphs: [
          "Search tools matter more when they behave like commitment tools, not decoration. In 4rent, filters were treated as part of the core product logic because narrowing by budget, location, and preferences is central to whether the product feels useful.",
          "That meant keeping the interaction model straightforward and predictable. Users should be able to tell what is being filtered, what changed, and how to revise the query without re-learning the interface every time.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "4rent became a strong exercise in native mobile product design for a high-browse, high-comparison category. It demonstrates how a cleaner information hierarchy can make a familiar marketplace feel more decisive and easier to trust.",
          "It also reflects a pattern I return to often in product work: reducing interface clutter so the user can judge options faster, not just scroll through more of them.",
        ],
      },
    ],
  },
  {
    slug: "car-rental",
    title: "Car Rental",
    description:
      "A mobile booking flow for searching cars, filtering availability, and completing reservations with a cleaner Android-first travel product experience.",
    deck:
      "An Android booking app built to make availability, filtering, and reservation flow feel straightforward on mobile.",
    image: "/carrental.png",
    category: "Kotlin",
    tags: [
      "Mobile App",
      "Kotlin",
      "MVVM",
      "Jetpack Navigation",
      "Retrofit",
      "Room",
      "Hilt",
    ],
    publishedAt: "2025-12-12",
    publishedLabel: "December 12, 2025",
    cardDate: "12 Dec 2025",
    author: "Arjun Bishnoi",
    sourceUrl: "https://github.com/arjunbishnoi/CarRental",
    introduction: [
      "Car Rental was designed around a transactional workflow that people usually complete under time pressure. When someone is trying to book transportation, the product has to answer practical questions immediately: what is available, what matches the need, what does it cost, and how quickly can the reservation be finished.",
      "That makes this kind of app a useful design test. It is not enough for the screens to look clean. The booking flow has to reduce hesitation and support confidence from search through confirmation.",
    ],
    sections: [
      {
        title: "Booking flow strategy",
        paragraphs: [
          "The product was structured to keep the booking journey linear without making it feel rigid. Users can search, refine, review options, and move toward reservation with a clear sense of progress, while still being able to back up and adjust choices without losing context.",
          "That matters because booking products fail when every step feels like a form. The interface should feel like guided decision-making, not a bureaucratic sequence.",
        ],
      },
      {
        title: "Android architecture",
        paragraphs: [
          "The app was built in Kotlin with MVVM, Jetpack Navigation, Retrofit, Room, and Hilt. That combination created a clean split between navigation, networking, persistence, and dependency wiring, which made the project easier to scale as more screens and state transitions were introduced.",
          "Using Room also helped the app support a smoother experience when users moved through repeated search and selection flows. The app could retain useful local state instead of treating every screen as a fresh start.",
        ],
      },
      {
        title: "Search, filters, and availability",
        paragraphs: [
          "Availability-driven products live or die by whether search results feel trustworthy. In this project, the emphasis was on making filters understandable and keeping availability-related decisions visible at the right moment in the journey.",
          "Instead of burying key constraints deep in the flow, the interface keeps dates, vehicle relevance, and pricing context close to the decision surface so users can narrow options without second-guessing what the system is showing them.",
        ],
      },
      {
        title: "Detail and confirmation states",
        paragraphs: [
          "Vehicle detail screens were designed to support quick evaluation, not just visual appeal. The user needs enough information to compare cars confidently without being forced through a dense wall of specs before reaching the booking action.",
          "Confirmation-related states then tighten the hierarchy even further. Once someone is ready to commit, the app should remove ambiguity, restate the essentials clearly, and make the next step obvious.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Car Rental demonstrates a practical Android implementation of a multi-step reservation product with a focus on clarity and booking momentum. It brings together common mobile engineering concerns, but the stronger lesson is product-oriented: transaction flows work best when every screen reduces uncertainty instead of adding more options to process.",
          "That principle shaped the final experience and remains one of the most useful things this project reinforced for me.",
        ],
      },
    ],
  },
];

export function getProjectArticleBySlug(slug: string) {
  return projectArticles.find((article) => article.slug === slug);
}
