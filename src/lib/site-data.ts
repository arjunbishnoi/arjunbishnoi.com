export const navigationItems = [
    { name: 'about', href: '/#about' },
    { name: 'skills', href: '/skills' },
    { name: 'projects', href: '/projects' },
    { name: 'contact', href: '/#contact' },
]

export const socialLinks = {
    github: 'https://github.com/arjunbishnoi',
    linkedin: 'https://www.linkedin.com/in/arjun-bishnoi-b981bb104',
    email: 'mailto:contact@arjunbishnoi.com',
    resume: '/Resume - Arjun Bishnoi.pdf',
    resumeDownloadName: 'Arjun Bishnoi - Resume.pdf'
}

export const projects = [
    {
        id: 'cryptotracker',
        title: 'Cryptocurrency Tracker',
        description: 'A cross-platform cryptocurrency tracker built with React Native, Expo, and Firebase Firestore. Features include real-time market data via the CoinLore API, detailed coin statistics, favorites management, pull-to-refresh, and seamless, native-feel navigation.',
        image: '/cryptotracker.png',
        tags: ['React Native', 'Expo', 'Firebase', 'CoinLore API'],
        sourceUrl: 'https://github.com/arjunbishnoi/CryptoTracker',
        featured: true,
        challenge: 'Building a cross-platform mobile app with real-time data synchronization and offline capabilities.',
        solution: 'Implemented Firebase Firestore for real-time data, Expo for cross-platform development, and optimized API calls for smooth performance.'
    },
    {
        id: '4rent',
        title: '4rent',
        description: 'A modern iOS rental marketplace built with SwiftUI, Combine, and MVVM architecture. Features include infinite-scroll property listings, high-resolution image galleries, detailed amenity and pricing views, favorites management, and fully adaptive layouts across all iPhone screen sizes.',
        image: '/4rent.png',
        tags: ['SwiftUI', 'Combine', 'MVVM', 'iOS'],
        sourceUrl: 'https://github.com/arjunbishnoi/4rent',
        featured: true
    },
    {
        id: 'carrental',
        title: 'Car Rental',
        description: 'A user-friendly Android car rental app built with Kotlin, MVVM, Jetpack Navigation, Retrofit, Room, and Hilt. Features include searchable, filterable vehicle listings, seamless booking flows with date selection, favorites management, profile & booking history screens, and offline-cached browsing for uninterrupted access.',
        image: '/carrental.png',
        tags: ['Kotlin', 'MVVM', 'Jetpack Navigation', 'Retrofit', 'Room', 'Hilt'],
        sourceUrl: 'https://github.com/arjunbishnoi/CarRental',
        featured: false
    }
]

export const skills = [
    {
        category: 'Frontend Development',
        groups: [
            {
                name: 'Frameworks & Libraries',
                items: [
                    { name: 'React.js', level: 'Advanced', percentage: 95, details: 'Redux, React Router, React Query, Context API, Hooks, Custom Hooks' },
                    { name: 'Vue.js', level: 'Advanced', percentage: 90, details: 'Vuex, Vue Router, Composition API, Nuxt.js, Vue Test Utils' },
                    { name: 'Next.js', level: 'Intermediate to Advanced', percentage: 85, details: 'SSR, SSG, ISR, API Routes, Next Auth, Image Optimization' }
                ]
            },
            {
                name: 'Languages & Styling',
                items: [
                    { name: 'JavaScript/TypeScript', level: 'Advanced', percentage: 92, details: 'ES6+, TypeScript, Async/Await, Functional Programming, Design Patterns' },
                    { name: 'CSS & Styling', level: 'Advanced', percentage: 90, details: 'CSS3, Sass/SCSS, Tailwind CSS, CSS Modules, Styled Components, CSS-in-JS' },
                    { name: 'HTML5', level: 'Advanced', percentage: 95, details: 'Semantic HTML, Accessibility (ARIA), SEO Optimization, Canvas, Web Components' }
                ]
            }
        ]
    },
    {
        category: 'Backend Development',
        groups: [
            {
                name: 'Server-side Technologies',
                items: [
                    { name: 'Node.js', level: 'Advanced', percentage: 90, details: 'Express.js, Fastify, RESTful APIs, Middleware, Authentication' },
                    { name: 'API Development', level: 'Advanced', percentage: 92, details: 'REST, GraphQL, Swagger/OpenAPI, API Authentication, Rate Limiting' },
                    { name: 'Authentication & Security', level: 'Intermediate to Advanced', percentage: 85, details: 'JWT, OAuth, Passport.js, CORS, XSS Prevention, CSRF, Helmet.js' }
                ]
            },
            {
                name: 'Databases & Storage',
                items: [
                    { name: 'NoSQL Databases', level: 'Advanced', percentage: 88, details: 'MongoDB, Mongoose, Firebase Firestore, Redis, Schema Design' },
                    { name: 'SQL Databases', level: 'Intermediate to Advanced', percentage: 80, details: 'PostgreSQL, MySQL, Sequelize, Knex.js, Query Optimization' },
                    { name: 'Cloud Storage', level: 'Intermediate', percentage: 75, details: 'AWS S3, Firebase Storage, Content Delivery Networks (CDN)' }
                ]
            }
        ]
    },
    {
        category: 'DevOps & Tools',
        groups: [
            {
                name: 'DevOps & Deployment',
                items: [
                    { name: 'CI/CD', level: 'Intermediate', percentage: 78, details: 'GitHub Actions, CircleCI, Jenkins, Automated Testing, Deployment Pipelines' },
                    { name: 'Containerization', level: 'Intermediate', percentage: 75, details: 'Docker, Docker Compose, Container Orchestration' },
                    { name: 'Cloud Services', level: 'Intermediate', percentage: 72, details: 'AWS, Vercel, Netlify, Heroku, Firebase' }
                ]
            },
            {
                name: 'Development Tools & Practices',
                items: [
                    { name: 'Version Control', level: 'Advanced', percentage: 95, details: 'Git, GitHub, GitLab, Branching Strategies, Code Reviews' },
                    { name: 'Testing', level: 'Intermediate to Advanced', percentage: 85, details: 'Jest, Testing Library, Cypress, Mocha, Chai, TDD Methodology' },
                    { name: 'Project Management', level: 'Intermediate', percentage: 80, details: 'Agile, Scrum, Jira, Trello, Sprint Planning' }
                ]
            }
        ]
    },
    {
        category: 'Design & UX',
        groups: [
            {
                name: 'UI/UX Design',
                items: [
                    { name: 'UI Design', level: 'Advanced', percentage: 88, details: 'Visual Design, Color Theory, Typography, Component Design' },
                    { name: 'UX Design', level: 'Intermediate to Advanced', percentage: 82, details: 'User Research, Wireframing, Prototyping, User Testing' },
                    { name: 'Design Tools', level: 'Advanced', percentage: 90, details: 'Figma, Adobe XD, Sketch, Illustrator, Photoshop' }
                ]
            }
        ]
    }
]

export const learning = [
    'Web3 & Blockchain',
    'Machine Learning Basics',
    'Progressive Web Apps',
    'Svelte & SvelteKit',
    'Kubernetes'
]

export const shortSkillList = [
    {
        category: 'Frontend',
        items: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'JavaScript/TypeScript']
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API Design', 'GraphQL']
    },
    {
        category: 'Design & Tools',
        items: ['UI/UX Design', 'Figma', 'Git & GitHub', 'Docker', 'AWS', 'CI/CD']
    }
]
