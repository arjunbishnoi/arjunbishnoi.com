<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-black">
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 pb-4 sm:pb-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Full Stack Developer
            <span class="block text-primary">& UI/UX Designer</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Crafting elegant, high-performance web solutions with precision and creativity.
            Passionate about React, Vue.js, and building intuitive digital experiences that solve real problems.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/resume.pdf"
              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              download
            >
              Download Resume
            </a>
            <a href="#contact" class="text-sm font-semibold leading-6 text-gray-300">
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Background gradient effect -->
      <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2 border-b border-gray-800" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <NuxtLink to="/projects" class="text-2xl font-bold text-white hover:text-primary transition-colors">Projects</NuxtLink>
            <NuxtLink to="/projects" class="text-gray-400 hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Projects content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="E-Commerce Platform Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
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
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Task Management App Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
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
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2 border-b border-gray-800" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <NuxtLink to="/skills" class="text-2xl font-bold text-white hover:text-primary transition-colors">Skills</NuxtLink>
            <NuxtLink to="/skills" class="text-gray-400 hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Skills content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Frontend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> React.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Vue.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Next.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Nuxt.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Tailwind CSS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> JavaScript/TypeScript
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Backend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Node.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Express
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> MongoDB
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> PostgreSQL
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> REST API Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> GraphQL
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Design & Tools</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> UI/UX Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Figma
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Git & GitHub
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Docker
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> AWS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2 border-b border-gray-800" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <NuxtLink to="/experience" class="text-2xl font-bold text-white hover:text-primary transition-colors">Experience</NuxtLink>
            <NuxtLink to="/experience" class="text-gray-400 hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Experience content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="space-y-12">
          <!-- Experience Item 1 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Senior Frontend Developer</h3>
              <p class="text-primary font-medium mb-2">TechCorp Inc. • 2021 - Present</p>
              <p class="text-gray-400 mb-4">
                Led the development of the company's flagship SaaS product, implementing 
                modern frontend architecture and improving performance by 40%.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Architected and implemented a new component system using React and TypeScript</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Improved application performance and reduced load times by 40%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborated with design team to implement a new design system</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Experience Item 2 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Full Stack Developer</h3>
              <p class="text-primary font-medium mb-2">Web Solutions Ltd. • 2018 - 2021</p>
              <p class="text-gray-400 mb-4">
                Developed and maintained multiple client projects, focusing on responsive design 
                and cross-browser compatibility.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built RESTful APIs using Node.js and Express for various client projects</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented responsive designs and ensured cross-browser compatibility</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Integrated third-party services and APIs into client applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2 border-b border-gray-800" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <NuxtLink to="/about" class="text-2xl font-bold text-white hover:text-primary transition-colors">About</NuxtLink>
            <NuxtLink to="/about" class="text-gray-400 hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- About content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">Who I Am</h3>
            <p class="text-gray-300 mb-6">
              I'm a full stack developer and UI/UX designer with a passion for creating 
              elegant, responsive, and user-friendly applications. With expertise in modern 
              frontend and backend technologies, I build solutions that not only work flawlessly 
              but also provide exceptional user experiences.
            </p>
            <p class="text-gray-300">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that the applications I build are not only functionally robust but 
              also visually appealing and intuitive to use.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">My Journey</h3>
            <p class="text-gray-300 mb-6">
              My journey into web development began with a curiosity about how digital 
              experiences are built. Over the years, I've honed my skills across the full 
              stack, from crafting pixel-perfect UIs to architecting scalable backend systems.
            </p>
            <p class="text-gray-300">
              I'm constantly learning and adapting to new technologies and best practices, 
              ensuring that my work remains current and innovative in a rapidly evolving 
              digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2 border-b border-gray-800" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <NuxtLink to="/contact" class="text-2xl font-bold text-white hover:text-primary transition-colors">Contact</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-400 hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Contact content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <h3 class="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p class="text-gray-300">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            a project in mind, or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div class="max-w-xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Sitemap Section -->
    <section id="sitemap" class="py-12 bg-black border-t border-gray-800">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Site Navigation -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li>
                <a href="/#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="/#skills" class="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="/#experience" class="text-gray-400 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="/#about" class="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <!-- Projects Links -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Projects</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">E-Commerce Platform</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Task Management App</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Portfolio Website</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">View All Projects</a>
              </li>
            </ul>
          </div>
          
          <!-- Resources -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="/resume.pdf" class="text-gray-400 hover:text-white transition-colors">Resume</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          
          <!-- Contact Information -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@arjunbishnoi.com" class="text-gray-400 hover:text-white transition-colors">contact@arjunbishnoi.com</a>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">github.com/arjunbishnoi</a>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">linkedin.com/in/arjunbishnoi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-8 bg-black border-t border-gray-800">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-sm text-gray-400">© {{ new Date().getFullYear() }} Arjun Bishnoi. All rights reserved.</p>
          </div>
          
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style>
/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Define primary and secondary colors */
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
}

.text-primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.border-primary {
  border-color: var(--color-primary);
}

/* Adjust the sticky header positioning to account for navbar height */
.sticky.top-12 {
  top: var(--navbar-height);
}
</style> 