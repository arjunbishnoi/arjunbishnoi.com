<template>
  <main class="bg-black min-h-screen">
    <!-- Header with animated gradient underline -->
    <div class="pt-16 pb-8 relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p class="mt-6 text-lg text-gray-300 max-w-2xl">
            A curated collection of my recent projects, highlighting my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
      </div>
      
      <!-- Subtle background gradient effect -->
      <div class="absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20">
        <div
          class="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-primary to-secondary"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Featured Project - Improved layout -->
      <section class="mb-20" v-if="featuredProject">
        <div class="flex items-center mb-8">
          <h2 class="text-2xl font-bold text-white">Featured Project</h2>
          <div class="h-px flex-grow bg-gray-800 ml-4"></div>
        </div>
        
        <div class="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 shadow-xl transition-all duration-300 hover:shadow-primary/10">
          <div class="h-80 relative overflow-hidden">
            <img 
              :src="featuredProject.image" 
              :alt="featuredProject.title" 
              loading="eager"
              class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/40 mix-blend-overlay"></div>
          </div>
          <div class="p-8 md:p-10">
              <h3 class="text-2xl font-semibold text-white mb-3">{{ featuredProject.title }}</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                {{ featuredProject.description }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="tag in featuredProject.tags" 
                  :key="tag"
                  class="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                >
                  {{ tag }}
                </span>
              </div>
              
              <div class="space-y-3 bg-black/30 p-4 rounded-lg mb-6" v-if="featuredProject.challenge">
                <p class="text-gray-300"><span class="text-accent font-semibold">Challenge:</span> {{ featuredProject.challenge }}</p>
                <p class="text-gray-300"><span class="text-accent font-semibold">Solution:</span> {{ featuredProject.solution }}</p>
              </div>
              
              <div class="flex gap-4 mt-6">
                <a :href="featuredProject.sourceUrl" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-content rounded-md transition-colors text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
      </section>

      <!-- Project Grid - Improved layout and consistency -->
      <section class="mb-20">
        <div class="flex items-center mb-8">
          <h2 class="text-2xl font-bold text-white">All Projects</h2>
          <div class="h-px flex-grow bg-gray-800 ml-4"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="project in projects" :key="project.id" class="group h-full"> 
             <!-- Wrapped in a div to ensure height consistency if ProjectCard doesn't fully expand, though ProjectCard has h-full -->
             <ProjectCard :project="project" />
          </div>
        </div>
      </section>

      <!-- More Projects - GitHub CTA -->
      <section class="mb-20">
        <div class="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 p-8 md:p-12 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <svg class="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">More Projects in Development</h3>
          <p class="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm constantly working on new projects and experiments. Visit my GitHub profile to see all my repositories, 
            including works in progress and contributions to open source.
          </p>
                     <a :href="socialLinks.github" target="_blank" rel="noopener noreferrer" class="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-content rounded-md inline-flex items-center transition-colors">
              <span class="font-medium">View All on GitHub</span>
             <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
             </svg>
           </a>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="mb-12">
        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800/50 p-10 md:p-16 relative">
          <!-- Background pattern -->
          <div class="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
          
          <div class="relative">
            <h2 class="text-2xl font-bold text-white mb-3 text-center">Interested in working together?</h2>
            <div class="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p class="text-gray-400 mb-8 max-w-2xl mx-auto text-center">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Let's create something amazing together.
            </p>
            <div class="text-center">
              <a href="/#contact" class="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-flex items-center transition-all duration-300 hover:scale-105">
                <span class="font-medium">Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Back to Home -->
      <div class="py-8 mb-4">
        <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors group flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <span class="font-medium">Back to Home</span>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const { projects, socialLinks } = useSiteData()
const featuredProject = computed(() => projects.find(p => p.featured))

// Set page title
useHead({
  title: 'Projects | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my portfolio of web development and design projects showcasing a range of skills and technologies.' },
    { property: 'og:title', content: 'Projects | Arjun Bishnoi' },
    { property: 'og:description', content: 'Explore my portfolio of web development and design projects showcasing a range of skills and technologies.' },
    { property: 'og:image', content: 'https://arjunbishnoi.com/projects-og.png' },
    { property: 'og:url', content: 'https://arjunbishnoi.com/projects' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projects | Arjun Bishnoi' },
    { name: 'twitter:description', content: 'Explore my portfolio of web development and design projects showcasing a range of skills and technologies.' },
    { name: 'twitter:image', content: 'https://arjunbishnoi.com/projects-og.png' }
  ]
})
</script> 