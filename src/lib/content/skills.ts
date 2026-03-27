import type { HeroSkill, ShortSkillGroup, SkillCategory } from "./types"

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    groups: [
      {
        name: "Frameworks & Libraries",
        items: [
          {
            name: "React.js",
            level: "Advanced",
            percentage: 95,
            details: "Redux, React Router, React Query, Context API, Hooks, Custom Hooks",
          },
          {
            name: "Vue.js",
            level: "Advanced",
            percentage: 90,
            details: "Vuex, Vue Router, Composition API, Nuxt.js, Vue Test Utils",
          },
          {
            name: "Next.js",
            level: "Intermediate to Advanced",
            percentage: 85,
            details: "SSR, SSG, ISR, API Routes, Next Auth, Image Optimization",
          },
        ],
      },
      {
        name: "Languages & Styling",
        items: [
          {
            name: "JavaScript/TypeScript",
            level: "Advanced",
            percentage: 92,
            details: "ES6+, TypeScript, Async/Await, Functional Programming, Design Patterns",
          },
          {
            name: "CSS & Styling",
            level: "Advanced",
            percentage: 90,
            details: "CSS3, Sass/SCSS, Tailwind CSS, CSS Modules, Styled Components, CSS-in-JS",
          },
          {
            name: "HTML5",
            level: "Advanced",
            percentage: 95,
            details: "Semantic HTML, Accessibility (ARIA), SEO Optimization, Canvas, Web Components",
          },
        ],
      },
    ],
  },
  {
    category: "Backend Development",
    groups: [
      {
        name: "Server-side Technologies",
        items: [
          {
            name: "Node.js",
            level: "Advanced",
            percentage: 90,
            details: "Express.js, Fastify, RESTful APIs, Middleware, Authentication",
          },
          {
            name: "API Development",
            level: "Advanced",
            percentage: 92,
            details: "REST, GraphQL, Swagger/OpenAPI, API Authentication, Rate Limiting",
          },
          {
            name: "Authentication & Security",
            level: "Intermediate to Advanced",
            percentage: 85,
            details: "JWT, OAuth, Passport.js, CORS, XSS Prevention, CSRF, Helmet.js",
          },
        ],
      },
      {
        name: "Databases & Storage",
        items: [
          {
            name: "NoSQL Databases",
            level: "Advanced",
            percentage: 88,
            details: "MongoDB, Mongoose, Firebase Firestore, Redis, Schema Design",
          },
          {
            name: "SQL Databases",
            level: "Intermediate to Advanced",
            percentage: 80,
            details: "PostgreSQL, MySQL, Sequelize, Knex.js, Query Optimization",
          },
          {
            name: "Cloud Storage",
            level: "Intermediate",
            percentage: 75,
            details: "AWS S3, Firebase Storage, Content Delivery Networks (CDN)",
          },
        ],
      },
    ],
  },
  {
    category: "DevOps & Tools",
    groups: [
      {
        name: "DevOps & Deployment",
        items: [
          {
            name: "CI/CD",
            level: "Intermediate",
            percentage: 78,
            details: "GitHub Actions, CircleCI, Jenkins, Automated Testing, Deployment Pipelines",
          },
          {
            name: "Containerization",
            level: "Intermediate",
            percentage: 75,
            details: "Docker, Docker Compose, Container Orchestration",
          },
          {
            name: "Cloud Services",
            level: "Intermediate",
            percentage: 72,
            details: "AWS, Vercel, Netlify, Heroku, Firebase",
          },
        ],
      },
      {
        name: "Development Tools & Practices",
        items: [
          {
            name: "Version Control",
            level: "Advanced",
            percentage: 95,
            details: "Git, GitHub, GitLab, Branching Strategies, Code Reviews",
          },
          {
            name: "Testing",
            level: "Intermediate to Advanced",
            percentage: 85,
            details: "Jest, Testing Library, Cypress, Mocha, Chai, TDD Methodology",
          },
          {
            name: "Project Management",
            level: "Intermediate",
            percentage: 80,
            details: "Agile, Scrum, Jira, Trello, Sprint Planning",
          },
        ],
      },
    ],
  },
  {
    category: "Design & UX",
    groups: [
      {
        name: "UI/UX Design",
        items: [
          {
            name: "UI Design",
            level: "Advanced",
            percentage: 88,
            details: "Visual Design, Color Theory, Typography, Component Design",
          },
          {
            name: "UX Design",
            level: "Intermediate to Advanced",
            percentage: 82,
            details: "User Research, Wireframing, Prototyping, User Testing",
          },
          {
            name: "Design Tools",
            level: "Advanced",
            percentage: 90,
            details: "Figma, Adobe XD, Sketch, Illustrator, Photoshop",
          },
        ],
      },
    ],
  },
]

export const learning: string[] = [
  "Web3 & Blockchain",
  "Machine Learning Basics",
  "Progressive Web Apps",
  "Svelte & SvelteKit",
  "Kubernetes",
]

export const shortSkillList: ShortSkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Vue.js", "Next.js", "Nuxt.js", "Tailwind CSS", "JavaScript/TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API Design", "GraphQL"],
  },
  {
    category: "Design & Tools",
    items: ["UI/UX Design", "Figma", "Git & GitHub", "Docker", "AWS", "CI/CD"],
  },
]

export const heroSkills: HeroSkill[] = [
  { name: "React Native", logoUrl: "https://cdn.simpleicons.org/react/71717A" },
  { name: "Python", logoUrl: "https://cdn.simpleicons.org/python/71717A" },
  { name: "Figma", logoUrl: "https://cdn.simpleicons.org/figma/71717A" },
  { name: "Swift", logoUrl: "https://cdn.simpleicons.org/swift/71717A" },
  { name: "Kotlin", logoUrl: "https://cdn.simpleicons.org/kotlin/71717A" },
  { name: "Typescript", logoUrl: "https://cdn.simpleicons.org/typescript/71717A" },
  { name: "Expo", logoUrl: "https://cdn.simpleicons.org/expo/71717A" },
  { name: "TensorFlow", logoUrl: "https://cdn.simpleicons.org/tensorflow/71717A" },
  { name: "Rest APIs", logoUrl: "https://cdn.simpleicons.org/swagger/71717A" },
  { name: "AI/ML", logoUrl: "https://cdn.simpleicons.org/pytorch/71717A" },
  { name: "Firebase", logoUrl: "https://cdn.simpleicons.org/firebase/71717A" },
  { name: "Git", logoUrl: "https://cdn.simpleicons.org/git/71717A" },
  { name: "Next.js", logoUrl: "https://cdn.simpleicons.org/nextdotjs/71717A" },
  { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs/71717A" },
  { name: "Docker", logoUrl: "https://cdn.simpleicons.org/docker/71717A" },
  { name: "PostgreSQL", logoUrl: "https://cdn.simpleicons.org/postgresql/71717A" },
  { name: "MongoDB", logoUrl: "https://cdn.simpleicons.org/mongodb/71717A" },
  { name: "Supabase", logoUrl: "https://cdn.simpleicons.org/supabase/71717A" },
]
