import type { SkillCategory } from "../types";

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
];
