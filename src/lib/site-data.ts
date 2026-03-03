export const navigationItems = [
    { name: 'about', href: '/#about' },
    { name: 'blog', href: '/blog' },
    { name: 'skills', href: '/#skills' },
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
        description: 'Monitor the live cryptocurrency market in real-time. Track your favorite coins, view detailed statistics, and manage your personal portfolio on the go. Stay informed with instant price alerts and interactive performance charts.',
        image: '/cryptotracker.png',
        tags: ['Mobile App', 'React Native', 'Expo', 'Firebase', 'CoinLore API'],
        sourceUrl: 'https://github.com/arjunbishnoi/CryptoTracker',
        featured: true,
        challenge: 'Building a cross-platform mobile app with real-time data synchronization and offline capabilities.',
        solution: 'Implemented Firebase Firestore for real-time data, Expo for cross-platform development, and optimized API calls for smooth performance.'
    },
    {
        id: '4rent',
        title: '4rent',
        description: 'Find your next home with this modern rental marketplace. Browse through high-resolution property galleries, check detailed pricing, and save your favorite listings. Streamline your search with smart filters and instant landlord communication.',
        image: '/4rent.png',
        tags: ['Mobile App', 'SwiftUI', 'Combine', 'MVVM', 'iOS'],
        sourceUrl: 'https://github.com/arjunbishnoi/4rent',
        featured: true
    },
    {
        id: 'carrental',
        title: 'Car Rental',
        description: 'Make booking your next vehicle effortless. Search through available cars, filter by your specific needs, pick your dates, and complete your reservation. Enjoy a seamless checkout experience with real-time availability and transparent pricing.',
        image: '/carrental.png',
        tags: ['Mobile App', 'Kotlin', 'MVVM', 'Jetpack Navigation', 'Retrofit', 'Room', 'Hilt'],
        sourceUrl: 'https://github.com/arjunbishnoi/CarRental',
        featured: true
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

export const blogs = [
    {
        id: 'the-future-of-ui',
        title: 'The Future of UI Design in 2026',
        description: 'Exploring upcoming trends in web interfaces, from spatial computing to hyper-minimalist neobrutalism. How AI is changing the way we interact with digital products.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop', // Abstract cool design
        tags: ['Design', 'UX/UI'],
        date: '10 Mar 2026',
        url: '#'
    },
    {
        id: 'optimizing-react-performance',
        title: 'Optimizing React Rendering at Scale',
        description: 'Deep dive into advanced performance mechanics in React 19. How we reduced time-to-interactive by 40% using concurrent features and server components.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop', // Code on screen
        tags: ['Engineering', 'React'],
        date: '28 Feb 2026',
        url: '#'
    },
    {
        id: 'building-for-accessibility',
        title: 'Building for True Digital Accessibility',
        description: 'Why WCAG compliance is just the baseline. Practical strategies for designing accessible experiences that work seamlessly for all users and modern devices.',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop', // Workspace
        tags: ['A11y', 'Web Design'],
        date: '14 Jan 2026',
        url: '#'
    }
];
