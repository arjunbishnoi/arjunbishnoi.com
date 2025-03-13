<template>
  <div class="min-h-screen bg-black fixed-bg">
    <!-- Navigation -->
    <header class="fixed w-full top-0 z-50">
      <!-- Navbar with integrated mobile menu -->
      <div 
        class="bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden border-b border-gray-800"
        :style="{
          height: isMobileMenuOpen ? '100vh' : 'var(--navbar-height)',
          minHeight: 'var(--navbar-height)'
        }"
      >
        <!-- Top navbar section -->
        <div class="mx-auto max-w-7xl h-12 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-none px-6 lg:px-8">
            <!-- Use a wrapper div to handle click events -->
            <div class="relative">
              <!-- Clickable area that adapts based on logo state -->
              <NuxtLink 
                to="/" 
                class="absolute inset-y-0 z-10 cursor-pointer" 
                :class="showFullLogo ? 'w-[10rem]' : 'w-[2.5rem]'"
                aria-label="Go to homepage"
              >
                <!-- Transparent hit area that matches visible logo dimensions -->
              </NuxtLink>
              
              <!-- Logo content (unchanged visually) -->
              <div class="text-xl font-bold relative">
                <div class="relative">
                  <!-- Full name version -->
                  <div 
                    class="transition-all duration-300 ease-in-out absolute left-0"
                    :class="!showFullLogo ? 'opacity-0 transform scale-95' : 'opacity-100'"
                  >
                    <span style="color: white;">a</span>
                    <span 
                      :style="{
                        color: 'white',
                        transition: 'all 300ms ease-in-out',
                        opacity: !showFullLogo ? 0 : 1
                      }"
                    >rjun</span>
                    <span 
                      :style="{
                        color: 'white',
                        transition: 'all 300ms ease-in-out',
                        transform: !showFullLogo ? 'translateX(-3.8rem)' : 'translateX(0)',
                        opacity: !showFullLogo ? 0 : 1
                      }"
                    >b</span>
                    <span 
                      :style="{
                        color: 'white',
                        transition: 'all 300ms ease-in-out',
                        opacity: !showFullLogo ? 0 : 1
                      }"
                    >ishnoi</span>
                    <span 
                      :style="{
                        color: '#9CA3AF',
                        transition: 'all 300ms ease-in-out',
                        transform: !showFullLogo ? 'translateX(-7.2rem)' : 'translateX(0)',
                        opacity: !showFullLogo ? 0 : 1
                      }"
                    >_</span>
                  </div>
                  <!-- Shortened version -->
                  <div 
                    class="transition-all duration-300 ease-in-out absolute left-0 overflow-visible"
                    :style="{
                      opacity: showFullLogo ? 0 : 1
                    }"
                  >
                    <span style="color: white;">a</span><span style="color: white;">b</span><span style="color: #9CA3AF;">_</span>
                  </div>
                </div>
                <!-- Spacer to maintain layout -->
                <span class="opacity-0">arjunbishnoi_</span>
              </div>
            </div>
          </div>

          <!-- Desktop Navigation in center -->
          <div class="hidden md:flex md:items-center md:space-x-8 md:flex-auto md:justify-start pl-6 lg:pl-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors mr-8"
            >
              {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
            </NuxtLink>
          </div>

          <!-- Mobile actions: theme toggle, email, and menu -->
          <div class="md:hidden flex items-center px-6 lg:px-8 relative h-full">
            <!-- Theme Toggle -->
            <button
              type="button"
              class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
              @click="toggleTheme"
              style="height: var(--navbar-height);"
            >
              <span class="sr-only">Toggle theme</span>
              <!-- Reduced hit area for theme toggle -->
              <span class="absolute inset-y-0 left-[-20px] right-[20px]"></span>
              <!-- Sun icon when in dark mode -->
              <svg
                v-if="isDarkMode"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <!-- Moon icon when in light mode -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>

            <!-- Email Button -->
            <button
              type="button"
              class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors ml-6 z-10 relative"
              @click="sendEmail"
              style="height: var(--navbar-height);"
            >
              <span class="sr-only">Send email</span>
              <!-- Hit area for email (extends from halfway to theme toggle on left to halfway to hamburger on right) -->
              <span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </button>
            
            <!-- Hamburger button -->
            <button 
              type="button"
              class="flex items-center justify-center cursor-pointer relative ml-6 z-10"
              style="height: var(--navbar-height);"
              @click.prevent="toggleMobileMenu"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Hit area for hamburger (extends from halfway to email on left to right edge) -->
              <span class="absolute inset-y-0 left-[-3px] right-[999px]"></span>
              <div class="w-4 h-3 relative">
                <!-- First line -->
                <div 
                  class="absolute h-[1px] transition-all duration-300 ease-in-out"
                  style="background-color: #9CA3AF;"
                  :class="[
                    isMobileMenuOpen ? 'w-3 top-[6px] rotate-45' : 'w-4 top-[3px]'
                  ]"
                ></div>
                <!-- Second line -->
                <div 
                  class="absolute h-[1px] transition-all duration-300 ease-in-out"
                  style="background-color: #9CA3AF;"
                  :class="[
                    isMobileMenuOpen ? 'w-3 top-[6px] -rotate-45' : 'w-4 top-[9px]'
                  ]"
                ></div>
              </div>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu items (part of the same container) -->
        <div class="md:hidden">
          <div class="menu-items-container px-6 lg:px-8">
            <div 
              v-for="(item, index) in navigationItems" 
              :key="item.name"
              class="transform transition-all duration-500 ease-out mb-6"
              :style="{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: `translateY(${isMobileMenuOpen ? 0 : -8}px)`,
                filter: `blur(${isMobileMenuOpen ? 0 : 2}px)`,
                transitionDelay: isMobileMenuOpen 
                  ? `${80 * index}ms` 
                  : `${30 * (navigationItems.length - index - 1)}ms`
              }"
            >
              <NuxtLink 
                :to="item.href"
                class="text-gray-400 text-xl font-bold hover:text-white transition-colors"
                @click="toggleMobileMenu"
              >
                {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Footer text -->
          <div 
            class="px-6 lg:px-8 pb-24 text-sm font-medium text-[#9CA3AF] text-center absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out"
            :style="{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: `translateY(${isMobileMenuOpen ? 0 : -8}px)`,
              filter: `blur(${isMobileMenuOpen ? 0 : 2}px)`,
              transitionDelay: isMobileMenuOpen ? '400ms' : '0ms'
            }"
          >
            made with <span class="text-red-500">❤</span> by arjun
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-12 bg-black text-white" :class="{ 'overflow-hidden': isMobileMenuOpen }">
      <NuxtPage />
    </main>

    <!-- Sitemap Section - Added from index.vue -->
    <section id="sitemap" class="py-12 bg-black border-t border-gray-800">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Site Navigation -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/projects" class="text-gray-400 hover:text-white transition-colors">Projects</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/skills" class="text-gray-400 hover:text-white transition-colors">Skills</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/experience" class="text-gray-400 hover:text-white transition-colors">Experience</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</NuxtLink>
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
                <NuxtLink to="/projects" class="text-gray-400 hover:text-white transition-colors">View All Projects</NuxtLink>
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
    
    <!-- Footer - Added from index.vue -->
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
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showFullLogo = computed(() => !isScrolled.value || isMobileMenuOpen.value)
const scrollPosition = ref(0)
const isDarkMode = ref(true) // Start with dark mode by default since your site is dark

const navigationItems = [
  { name: 'about', href: '/about' },
  { name: 'skills', href: '/skills' },
  { name: 'projects', href: '/projects' },
  { name: 'experience', href: '/experience' },
  { name: 'contact', href: '/contact' },
]

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    // Save current scroll position
    scrollPosition.value = window.scrollY
    
    // Add class to disable scrolling but keep scrollbar visible
    document.documentElement.style.backgroundColor = 'black' // Ensure black background
    document.body.classList.add('overflow-hidden')
    
    // Maintain scroll position
    document.body.style.top = `-${scrollPosition.value}px`
  } else {
    // Add a small delay before removing the overflow class to allow the animation to complete
    setTimeout(() => {
      // Remove the class that disables scrolling
      document.body.classList.remove('overflow-hidden')
      
      // Reset the body position
      document.body.style.top = ''
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition.value)
    }, 400)
  }
})

// Method to toggle mobile menu
const toggleMobileMenu = (event) => {
  event.preventDefault(); // Prevent default action
  isMobileMenuOpen.value = !isMobileMenuOpen.value; // Toggle the menu
};

// Add new method for email
const sendEmail = () => {
  window.location.href = 'mailto:contact@arjunbishnoi.com'
}

// Add new method for theme toggle
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  // You can implement the actual theme switching logic here
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onBeforeUnmount(() => {
  // Clean up scroll locking if component is unmounted while menu is open
  document.body.classList.remove('overflow-hidden')
  document.body.style.top = ''
  window.scrollTo(0, scrollPosition.value)
})
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-y: scroll; /* Always show vertical scrollbar to prevent layout shift */
  background-color: black; /* Ensure black background at root level */
}

body {
  @apply font-sans antialiased text-white;
  background-color: black; /* Ensure black background */
  min-height: 100vh;
  /* Remove the overflow-y from here since html handles it */
  overflow: unset;
}

/* Class to disable scrolling without removing scrollbar */
body.overflow-hidden {
  /* Remove overflow-y: scroll from here since html handles it */
  position: fixed;
  width: 100%;
  height: 100%;
  /* Add top: 0 to ensure proper positioning */
  top: 0;
  left: 0;
  background-color: black; /* Ensure black background when fixed */
}

/* Ensure background stays black even during transitions */
.fixed-bg {
  background-color: black;
  min-height: 100vh;
}

.transform {
  transform-origin: left;
}

.scale-95 {
  transform: scale(0.95);
}

.translate-x-2 {
  transform: translateX(0.5rem);
}

:root {
  --navbar-height: 3rem;
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
}

.h-12 {
  height: var(--navbar-height);
}

.h-screen {
  height: 100vh;
}

.origin-top {
  transform-origin: top;
}

.menu-items-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Add styles from index.vue */
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
