<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Skills
          <span class="block text-xl text-primary mt-2">My technical expertise</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          A comprehensive overview of my technical skills and proficiencies, developed through years of 
          professional experience and continuous learning.
        </p>
      </div>
    </div>

    <!-- Skills Categories -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <!-- Frontend Skills -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-white mb-8">Frontend Development</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Framework Expertise -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">Frameworks & Libraries</h3>
            <div class="space-y-6">
              <!-- React.js -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">React.js</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Redux, React Router, React Query, Context API, Hooks, Custom Hooks
                </p>
              </div>
              
              <!-- Vue.js -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Vue.js</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Vuex, Vue Router, Composition API, Nuxt.js, Vue Test Utils
                </p>
              </div>
              
              <!-- Next.js -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Next.js</span>
                  <span class="text-gray-400 text-sm">Intermediate to Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  SSR, SSG, ISR, API Routes, Next Auth, Image Optimization
                </p>
              </div>
            </div>
          </div>
          
          <!-- Languages & Styling -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">Languages & Styling</h3>
            <div class="space-y-6">
              <!-- JavaScript/TypeScript -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">JavaScript/TypeScript</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 92%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  ES6+, TypeScript, Async/Await, Functional Programming, Design Patterns
                </p>
              </div>
              
              <!-- CSS & Styling -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">CSS & Styling</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  CSS3, Sass/SCSS, Tailwind CSS, CSS Modules, Styled Components, CSS-in-JS
                </p>
              </div>
              
              <!-- HTML5 -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">HTML5</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Semantic HTML, Accessibility (ARIA), SEO Optimization, Canvas, Web Components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Backend Skills -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-white mb-8">Backend Development</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Backend Technologies -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">Server-side Technologies</h3>
            <div class="space-y-6">
              <!-- Node.js -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Node.js</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Express.js, Fastify, RESTful APIs, Middleware, Authentication
                </p>
              </div>
              
              <!-- API Development -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">API Development</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 92%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  REST, GraphQL, Swagger/OpenAPI, API Authentication, Rate Limiting
                </p>
              </div>
              
              <!-- Authentication & Security -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Authentication & Security</span>
                  <span class="text-gray-400 text-sm">Intermediate to Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  JWT, OAuth, Passport.js, CORS, XSS Prevention, CSRF, Helmet.js
                </p>
              </div>
            </div>
          </div>
          
          <!-- Databases -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">Databases & Storage</h3>
            <div class="space-y-6">
              <!-- NoSQL Databases -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">NoSQL Databases</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 88%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  MongoDB, Mongoose, Firebase Firestore, Redis, Schema Design
                </p>
              </div>
              
              <!-- SQL Databases -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">SQL Databases</span>
                  <span class="text-gray-400 text-sm">Intermediate to Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  PostgreSQL, MySQL, Sequelize, Knex.js, Query Optimization
                </p>
              </div>
              
              <!-- Cloud Storage -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Cloud Storage</span>
                  <span class="text-gray-400 text-sm">Intermediate</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  AWS S3, Firebase Storage, Content Delivery Networks (CDN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- DevOps & Tools -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-white mb-8">DevOps & Tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- DevOps -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">DevOps & Deployment</h3>
            <div class="space-y-6">
              <!-- CI/CD -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">CI/CD</span>
                  <span class="text-gray-400 text-sm">Intermediate</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 78%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  GitHub Actions, CircleCI, Jenkins, Automated Testing, Deployment Pipelines
                </p>
              </div>
              
              <!-- Containerization -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Containerization</span>
                  <span class="text-gray-400 text-sm">Intermediate</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Docker, Docker Compose, Container Orchestration
                </p>
              </div>
              
              <!-- Cloud Services -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Cloud Services</span>
                  <span class="text-gray-400 text-sm">Intermediate</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 72%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  AWS, Vercel, Netlify, Heroku, Firebase
                </p>
              </div>
            </div>
          </div>
          
          <!-- Tools & Practices -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-primary mb-4">Development Tools & Practices</h3>
            <div class="space-y-6">
              <!-- Version Control -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Version Control</span>
                  <span class="text-gray-400 text-sm">Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Git, GitHub, GitLab, Branching Strategies, Code Reviews
                </p>
              </div>
              
              <!-- Testing -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Testing</span>
                  <span class="text-gray-400 text-sm">Intermediate to Advanced</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Jest, Testing Library, Cypress, Mocha, Chai, TDD Methodology
                </p>
              </div>
              
              <!-- Project Management -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">Project Management</span>
                  <span class="text-gray-400 text-sm">Intermediate</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                </div>
                <p class="mt-2 text-sm text-gray-400">
                  Agile, Scrum, Jira, Trello, Sprint Planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Design Skills -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8">Design & UX</h2>
        <div class="bg-gray-900/50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-primary mb-4">UI/UX Design</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- UI Design -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-white font-medium">UI Design</span>
                <span class="text-gray-400 text-sm">Advanced</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 88%"></div>
              </div>
              <p class="mt-2 text-sm text-gray-400">
                Visual Design, Color Theory, Typography, Component Design
              </p>
            </div>
            
            <!-- UX Design -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-white font-medium">UX Design</span>
                <span class="text-gray-400 text-sm">Intermediate to Advanced</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 82%"></div>
              </div>
              <p class="mt-2 text-sm text-gray-400">
                User Research, Wireframing, Prototyping, User Testing
              </p>
            </div>
            
            <!-- Design Tools -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-white font-medium">Design Tools</span>
                <span class="text-gray-400 text-sm">Advanced</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
              </div>
              <p class="mt-2 text-sm text-gray-400">
                Figma, Adobe XD, Sketch, Illustrator, Photoshop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ongoing Learning -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div class="bg-gray-900/50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-white mb-6">Currently Learning</h2>
        <div class="flex flex-wrap gap-4">
          <div class="px-4 py-2 bg-primary/20 text-primary rounded-full">Web3 & Blockchain</div>
          <div class="px-4 py-2 bg-primary/20 text-primary rounded-full">Machine Learning Basics</div>
          <div class="px-4 py-2 bg-primary/20 text-primary rounded-full">Progressive Web Apps</div>
          <div class="px-4 py-2 bg-primary/20 text-primary rounded-full">Svelte & SvelteKit</div>
          <div class="px-4 py-2 bg-primary/20 text-primary rounded-full">Kubernetes</div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Let's Work Together</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          Looking for a developer with the right skill set for your project? Let's discuss how I can help bring your ideas to life.
        </p>
        <NuxtLink to="/contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
          Contact Me
        </NuxtLink>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
        <span aria-hidden="true">←</span> Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'Skills | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design.' }
  ]
})
</script> 