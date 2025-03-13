<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Projects
          <span class="block text-xl text-primary mt-2">Showcasing my development work</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          A curated collection of my recent projects, highlighting my skills in full-stack development, 
          UI/UX design, and problem-solving.
        </p>
      </div>
    </div>

    <!-- Projects List -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <!-- Featured Project -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold text-white mb-6">Featured Project</h2>
        <div class="bg-gray-900/50 rounded-lg overflow-hidden">
          <div class="md:flex">
            <div class="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="E-Commerce Platform Abstract Visualization" 
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
            </div>
            <div class="md:w-1/2 p-8">
              <h3 class="text-2xl font-semibold text-white mb-3">E-Commerce Platform</h3>
              <p class="text-gray-400 mb-4">
                A full-featured e-commerce platform built with React, Node.js, and MongoDB. 
                This application includes advanced product search, filtering, cart management, user authentication, 
                payment processing, and an admin dashboard for inventory management.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Stripe</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Redux</span>
              </div>
              <div class="space-y-3">
                <p class="text-gray-300"><span class="text-primary font-semibold">Challenge:</span> Creating a scalable architecture that handles high traffic and complex product relationships.</p>
                <p class="text-gray-300"><span class="text-primary font-semibold">Solution:</span> Implemented a microservices architecture with caching strategies and optimized database queries.</p>
              </div>
              <div class="flex gap-4 mt-6">
                <a href="#" class="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors">View Demo</a>
                <a href="#" class="px-4 py-2 border border-gray-700 text-gray-300 hover:text-white rounded-md transition-colors">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Grid -->
      <h2 class="text-2xl font-bold text-white mb-6">All Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-gray-900/50 rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-800/50 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="E-Commerce Platform Abstract Visualization" 
              class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
            <p class="text-gray-400 mb-4">
              A full-featured e-commerce platform built with React, Node.js, and MongoDB. 
              Features include product search, filtering, cart management, user authentication, 
              and payment processing.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Stripe</span>
            </div>
            <div class="flex gap-4">
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 2 -->
        <div class="bg-gray-900/50 rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-800/50 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Task Management App Abstract Visualization" 
              class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-tl from-secondary/40 to-primary/40 mix-blend-overlay"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">Task Management App</h3>
            <p class="text-gray-400 mb-4">
              A productivity app that helps users organize tasks, set priorities, and track progress. 
              Built with Vue.js and Firebase, featuring real-time updates and collaborative features.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vue.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Firebase</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Tailwind CSS</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vuex</span>
            </div>
            <div class="flex gap-4">
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="bg-gray-900/50 rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-800/50 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Booking System" 
              class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 mix-blend-overlay"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">Restaurant Booking System</h3>
            <p class="text-gray-400 mb-4">
              A reservation management system for restaurants, allowing customers to book tables online
              and restaurant managers to manage bookings, tables, and staff schedules.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Express</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">PostgreSQL</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Socket.io</span>
            </div>
            <div class="flex gap-4">
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project Card 4 -->
        <div class="bg-gray-900/50 rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-800/50 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1620824446440-c26383330fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Weather Dashboard" 
              class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-tl from-primary/40 to-secondary/40 mix-blend-overlay"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">Weather Dashboard</h3>
            <p class="text-gray-400 mb-4">
              A sleek, interactive weather dashboard providing real-time weather data, forecasts, 
              and historical weather patterns with beautiful visualizations.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">TypeScript</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Next.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">D3.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">OpenWeather API</span>
            </div>
            <div class="flex gap-4">
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
              <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More Projects -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8 text-center">
      <p class="text-gray-400 mb-6">More projects are in development. Check my GitHub for the latest updates.</p>
      <a href="#" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
        View All on GitHub
      </a>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Interested in working together?</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <NuxtLink to="/contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
          Get In Touch
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
  title: 'Projects | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my portfolio of web development and design projects showcasing a range of skills and technologies.' }
  ]
})
</script> 