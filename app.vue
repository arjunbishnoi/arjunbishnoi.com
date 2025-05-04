<template>
  <div class="min-h-screen bg-black fixed-bg">
    <!-- Navigation -->
    <header class="fixed w-full top-0 z-50">
      <!-- Navbar with integrated mobile menu -->
      <div 
        class="bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden"
        :style="{
          height: isMobileMenuOpen ? '100vh' : 'var(--navbar-height)',
          minHeight: 'var(--navbar-height)'
        }"
      >
        <!-- Top navbar section -->
        <div class="mx-auto max-w-7xl h-12 flex items-center">
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
                  <span :style="{ color: isDarkMode ? 'white' : '#111827' }">a</span>
                  <span 
                    :style="{
                      color: isDarkMode ? 'white' : '#111827',
                      transition: 'all 300ms ease-in-out',
                      opacity: !showFullLogo ? 0 : 1
                    }"
                  >rjun</span>
                  <span 
                    :style="{
                      color: isDarkMode ? 'white' : '#111827',
                      transition: 'all 300ms ease-in-out',
                      transform: !showFullLogo ? 'translateX(-3.8rem)' : 'translateX(0)',
                      opacity: !showFullLogo ? 0 : 1
                    }"
                  >b</span>
                  <span 
                    :style="{
                      color: isDarkMode ? 'white' : '#111827',
                      transition: 'all 300ms ease-in-out',
                      opacity: !showFullLogo ? 0 : 1
                    }"
                  >ishnoi</span>
                  <span 
                    :style="{
                      color: isDarkMode ? '#9CA3AF' : '#6B7280',
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
                  <span :style="{ color: isDarkMode ? 'white' : '#111827' }">a</span>
                  <span :style="{ color: isDarkMode ? 'white' : '#111827' }">b</span>
                  <span :style="{ color: isDarkMode ? '#9CA3AF' : '#6B7280' }">_</span>
                </div>
              </div>
              <!-- Spacer to maintain layout -->
              <span class="opacity-0">arjunbishnoi_</span>
              </div>
            </div>
          </div>

          <!-- Desktop Navigation in center -->
          <div class="hidden md:flex items-center justify-center w-full absolute left-0 right-0">
            <div class="flex items-center space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors nav-link"
            >
                {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
            </NuxtLink>
            </div>
          </div>

          <!-- Desktop actions on right side, symmetrical to logo on left -->
          <div class="hidden md:flex items-center ml-auto px-6 lg:px-8">
            <!-- Theme Toggle -->
            <button
              type="button"
              class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
              @click="toggleTheme"
              style="height: var(--navbar-height);"
            >
              <span class="sr-only">Toggle theme</span>
              <!-- Extended hit area -->
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

            <!-- Resume Download Button -->
            <button
              type="button"
              class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors ml-6 z-10 relative"
              @click="downloadResume"
              style="height: var(--navbar-height);"
            >
              <span class="sr-only">Download Resume</span>
              <!-- Extended hit area -->
              <span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
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
              <!-- Extended hit area -->
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
          </div>
        
          <!-- Mobile actions: theme toggle, email, and menu -->
          <div class="md:hidden flex items-center px-6 lg:px-8 relative h-full ml-auto">
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
              class="absolute h-[1.5px] transition-all duration-300 ease-in-out"
              :style="{
                backgroundColor: isDarkMode ? '#9CA3AF' : '#4B5563'
              }"
              :class="[
                isMobileMenuOpen ? 'w-3 top-[6px] rotate-45' : 'w-4 top-[3px]'
              ]"
            ></div>
            <!-- Second line -->
            <div 
              class="absolute h-[1.5px] transition-all duration-300 ease-in-out"
              :style="{
                backgroundColor: isDarkMode ? '#9CA3AF' : '#4B5563'
              }"
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
              class="transform transition-all duration-500 ease-out mb-4"
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
                class="text-gray-400 text-xl font-bold hover:text-white transition-colors nav-link"
                @click="toggleMobileMenu"
              >
                {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
              </NuxtLink>
            </div>
            
            <!-- Download Resume Button in Mobile Menu -->
            <div 
              class="transform transition-all duration-500 ease-out mb-4"
              :style="{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: `translateY(${isMobileMenuOpen ? 0 : -8}px)`,
                filter: `blur(${isMobileMenuOpen ? 0 : 2}px)`,
                transitionDelay: isMobileMenuOpen ? '400ms' : '0ms'
              }"
            >
              <button
                @click="downloadResume"
                class="text-gray-400 text-xl font-bold hover:text-white transition-colors nav-link"
              >
                Download Resume
              </button>
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
                <a href="/Resume - Arjun Bishnoi.pdf" class="text-gray-400 hover:text-white transition-colors">Resume</a>
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
  { name: 'contact', href: '/contact' },
]

// Add new method for downloading resume
const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Resume - Arjun Bishnoi.pdf';
  link.download = 'Arjun Bishnoi - Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    // Save current scroll position
    scrollPosition.value = window.scrollY;
    
    // Add class to disable scrolling but keep scrollbar visible
    document.documentElement.style.backgroundColor = 'black';
    document.body.classList.add('overflow-hidden');
    
    // Maintain scroll position with requestAnimationFrame
    requestAnimationFrame(() => {
      document.body.style.top = `-${scrollPosition.value}px`;
    });
  } else {
    // Remove the class that disables scrolling
    document.body.classList.remove('overflow-hidden');
    
    // Reset the body position
    document.body.style.top = '';
    
    // Restore scroll position with a small delay
    setTimeout(() => {
      window.scrollTo(0, scrollPosition.value);
    }, 50);
  }
}, { flush: 'post' });

// Watch for theme changes and apply appropriate classes
watch(isDarkMode, (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark-theme')
    document.documentElement.classList.remove('light-theme')
  } else {
    document.documentElement.classList.add('light-theme')
    document.documentElement.classList.remove('dark-theme')
  }
})

// Method to toggle mobile menu
const toggleMobileMenu = (event) => {
  event.preventDefault();
  // Use requestAnimationFrame to ensure smooth animation
  requestAnimationFrame(() => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  });
};

// Add new method for email
const sendEmail = () => {
  window.location.href = 'mailto:contact@arjunbishnoi.com'
}

// Add new method for theme toggle
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check

  // Set initial theme class
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.add('light-theme')
  }
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
  overflow-x: hidden; /* Prevent horizontal scrolling */
  background-color: black; /* Ensure black background at root level */
}

body {
  @apply font-sans antialiased text-white;
  background-color: black; /* Ensure black background */
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  /* Remove the overflow-y from here since html handles it */
  overflow: unset;
}

/* Mobile-first hero title styles with fluid typography */
.hero-title-wrapper {
  width: 100%;
  text-align: center;
  /* Fixed height container to prevent vertical shifting */
  position: relative;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-title-line {
  display: block;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  /* Reduced line height for tighter overall spacing */
  line-height: 0.95;
  /* Adding transition for smooth size changes */
  transition: font-size 0.3s ease, margin 0.3s ease, line-height 0.3s ease;
  /* Ensure perfect centered alignment */
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
}

/* Hero title container with fixed vertical spacing */
.hero-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  /* Fixed height prevents vertical shifting */
  height: auto;
  /* Consistently tight gap between title lines */
  gap: 0.05em;
  /* Add significant margin below the title container to push paragraphs down */
  margin-bottom: 1.75rem;
}

/* Maintain consistent vertical spacing */
section.relative.overflow-hidden.bg-black {
  /* Fixed minimum height to prevent content jumping */
  min-height: 20rem;
}

/* Fluid typography and spacing for very small screens */
@media (max-width: 374px) {
  .hero-title-container .hero-title-line {
    font-size: clamp(1.5rem, 6vw, 1.75rem); /* Increased minimum size for better visibility */
  }
  /* Gap value now set at the root level for consistency */
}

/* Fluid typography and spacing for small to medium screens */
@media (min-width: 375px) and (max-width: 639px) {
  .hero-title-container .hero-title-line {
    font-size: clamp(1.625rem, 6.5vw, 1.875rem); /* Increased minimum size for better visibility */
  }
  /* Reduce gap for small-medium screens to match smallest/largest screens */
  .hero-title-container {
    gap: 0.02em;
  }
  
  /* Add negative margins for even tighter appearance */
  .hero-line-1 {
    margin-bottom: -0.08em;
  }
  
  .hero-line-2 {
    margin-top: -0.08em;
  }
}

/* Fluid typography and spacing for medium to large screens */
@media (min-width: 640px) and (max-width: 767px) {
  .hero-title-container .hero-title-line {
    font-size: clamp(1.875rem, 7vw, 2.25rem); /* Updated for smoother progression */
  }
  /* Reduce gap for medium screens */
  .hero-title-container {
    gap: 0.02em;
  }
  
  /* Tighten spacing for medium screens */
  .hero-line-1 {
    margin-bottom: -0.08em; /* Increased negative margin for consistent spacing */
  }
  
  .hero-line-2 {
    margin-top: -0.08em; /* Increased negative margin for consistent spacing */
  }
}

/* Fluid typography and spacing for large to extra large screens */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-title-container .hero-title-line {
    font-size: clamp(2.25rem, 5vw, 2.5rem); /* Updated for smoother progression */
  }
  /* Reduce gap for large screens to match smallest/largest screens */
  .hero-title-container {
    gap: 0.02em;
  }
  
  /* Add negative margins for tighter appearance */
  .hero-line-1 {
    margin-bottom: -0.07em;
  }
  
  .hero-line-2 {
    margin-top: -0.07em;
  }
}

/* Fluid typography and spacing for extra large screens */
@media (min-width: 1024px) {
  .hero-title-container .hero-title-line {
    font-size: clamp(2.5rem, 4vw, 3rem); /* Updated for smoother progression */
  }
  /* Override to reduce gap for largest screens only */
  .hero-title-container {
    gap: 0.02em; /* Tighter gap only on larger screens */
  }
  
  /* Additional negative margin for extra closeness on large screens */
  .hero-line-1 {
    margin-bottom: -0.05em;
  }
  
  .hero-line-2 {
    margin-top: -0.05em;
  }
}

/* Ensure proper spacing for smaller devices with larger text */
@media (max-width: 639px) {
  .hero-title-wrapper {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  
  .hero-title-line {
    line-height: 1;
    margin-bottom: 0;
  }
  
  /* Enhanced control with specific line classes */
  .hero-line-1 {
    margin-bottom: -0.1em; /* Increased negative margin for extra closeness */
  }
  
  .hero-line-2 {
    margin-top: -0.1em; /* Increased negative margin for extra closeness */
  }
}

/* Extra small devices need tighter spacing */
@media (max-width: 374px) {
  .hero-title-container {
    gap: 0.02em; /* Reduced gap for very small screens */
  }
  
  .hero-line-1 {
    margin-bottom: -0.15em; /* Increased negative margin for very close spacing */
  }
  
  .hero-line-2 {
    margin-top: -0.15em; /* Increased negative margin for very close spacing */
  }
}

/* Dark theme (default) */
.dark-theme {
  --background-color: #000000;
  --text-color: #ffffff;
  --gray-text: #9CA3AF;
  --card-bg: rgba(17, 24, 39, 0.5); /* gray-900/50 */
  --border-color: rgba(31, 41, 55, 1); /* gray-800 */
  --button-hover-bg: #ffffff;
  --button-hover-text: #111827;
}

/* Light theme */
.light-theme {
  --background-color: #ffffff;
  --text-color: #111827; /* gray-900 */
  --gray-text: #4B5563; /* gray-600 */
  --card-bg: rgba(243, 244, 246, 0.8); /* gray-100/80 */
  --border-color: #E5E7EB; /* gray-200 */
  --button-hover-bg: #111827;
  --button-hover-text: #ffffff;
}

/* Apply theme variables */
.dark-theme {
  color-scheme: dark;
}

.light-theme {
  color-scheme: light;
}

html.light-theme {
  background-color: var(--background-color);
}

html.dark-theme {
  background-color: var(--background-color);
}

.light-theme .bg-black {
  background-color: var(--background-color);
}

.light-theme .text-white {
  color: var(--text-color);
}

.light-theme .text-gray-400, 
.light-theme .text-gray-300 {
  color: var(--gray-text);
}

.light-theme .bg-black\/80 {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

.light-theme .bg-gray-900\/50 {
  background-color: var(--card-bg);
}

.light-theme .border-gray-800 {
  border-color: var(--border-color);
}

.light-theme .fixed-bg {
  background-color: var(--background-color);
}

/* Resume button styles */
.bg-primary {
  background-color: var(--color-primary);
}

.hover\:bg-primary\/90:hover {
  background-color: var(--color-primary);
  opacity: 0.9;
}

/* Custom hover styles for resume button */
.dark-theme .resume-btn {
  background-color: white !important;
  color: black !important;
  border-color: white !important;
}

.dark-theme .resume-btn:hover {
  background-color: transparent !important;
  color: white !important;
  border-color: white !important;
}

.light-theme .resume-btn {
  background-color: black !important;
  color: white !important;
  border-color: black !important;
}

.light-theme .resume-btn:hover {
  background-color: transparent !important;
  color: black !important;
  border-color: black !important;
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

/* Theme-specific navigation hover states */
.dark-theme .nav-link:hover {
  color: white !important;
}

.light-theme .nav-link:hover {
  color: black !important;
}

/* Hero-specific styles to prevent vertical shifting */
.hero-section {
  /* Fixed position from the top of the page */
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

/* Tighter paragraph spacing in hero section */
.hero-section p, 
.hero-content p {
  line-height: 1.4; /* Reduced from default (typically 1.5-1.7) */
  margin-bottom: 0.8em; /* Reduced paragraph spacing */
  max-width: 650px; /* Prevent overly long line lengths */
  margin-left: auto;
  margin-right: auto;
  color: #d1d5db; /* Slightly darker text color (gray-300) for better readability */
  /* Add margin-top to create space after the title */
  margin-top: 0.5rem;
}

/* At smaller screen sizes, further reduce paragraph spacing and width */
@media (max-width: 640px) {
  .hero-section p,
  .hero-content p {
    line-height: 1.3; /* Even tighter on mobile */
    margin-bottom: 0.6em;
    max-width: 90%; /* Narrower on small screens */
    /* Maintain space below title on small screens */
    margin-top: 0.75rem;
  }
  
  /* Adjust title spacing on mobile */
  .hero-title-container {
    margin-bottom: 1.2rem; /* Reduced from 1.5rem to bring paragraph closer */
  }
}

/* Specifically for the smallest screens (phones), make paragraph even narrower */
@media (max-width: 480px) {
  .hero-section p,
  .hero-content p {
    max-width: 85%; /* Much narrower on smallest screens */
  }
}

/* For extra small devices, tightest paragraph width */
@media (max-width: 375px) {
  .hero-section p,
  .hero-content p {
    max-width: 80%; /* Extremely narrow for tiny screens */
    font-size: 0.95em; /* Slightly smaller font to fit better */
    line-height: 1.25; /* Tighter line height */
    /* Maintain consistent spacing on smallest screens */
    margin-top: 0.75rem;
  }
  
  /* Ensure proper spacing on smallest screens */
  .hero-title-container {
    margin-bottom: 1rem; /* Reduced from 1.25rem to bring paragraph closer */
  }
}

/* At middle screen sizes, use a moderate max-width */
@media (min-width: 641px) and (max-width: 1023px) {
  .hero-section p,
  .hero-content p {
    max-width: 85%; /* Moderate width on middle screens */
  }
}

.hero-content {
  /* Prevent container expansion */
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* Ensure mobile centering */
  margin: 0 auto;
  max-width: 100%;
}

/* Extra mobile-specific centering fixes */
@media (max-width: 640px) {
  .hero-title-wrapper, 
  .hero-title-container, 
  .hero-title-line,
  .hero-content {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  .hero-title-line {
    width: 100%;
    display: inline-block;
  }
}

/* Animated gradient text effect for the second hero line */
.hero-line-2 {
  /* Beautiful gradient with colors inspired by the primary color */
  background: linear-gradient(
    to right,
    #6366f1, /* Original primary color */
    #8b5cf6, /* Secondary purple */
    #a855f7, /* Violet */
    #d946ef, /* Fuchsia */
    #e879f9, /* Bright purple */
    #c084fc, /* Soft lilac */
    #6366f1  /* Back to primary */
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background-size: 300% auto;
  animation: gradient-text 8s ease infinite;
  display: inline-block;
  /* Apply slightly higher font weight for better visibility of gradient */
  font-weight: 700;
  /* Add subtle text shadow for better visibility in light mode */
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  /* Additional contrast for light theme */
  position: relative;
  /* Smooth transition for hover effect */
  transition: filter 0.3s ease;
  /* Add small padding to prevent text clipping */
  padding-bottom: 0.1em;
}

/* Hover effect to make gradient more vibrant */
.hero-line-2:hover {
  filter: brightness(1.1) saturate(1.05);
  animation: gradient-text 4s ease infinite; /* Speed up animation on hover */
  cursor: default; /* Prevent cursor change while keeping hover effect */
}

/* Smooth gradient animation */
@keyframes gradient-text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Ensure gradient works well in light theme */
.light-theme .hero-line-2 {
  /* Slightly darker gradient for better visibility on light background */
  background: linear-gradient(
    to right,
    #4f46e5, /* Darker indigo */
    #7c3aed, /* Darker violet */
    #9333ea, /* Darker purple */
    #c026d3, /* Darker fuchsia */
    #a21caf, /* Darker magenta */
    #8b5cf6, /* Purple */
    #4f46e5  /* Back to darker indigo */
  );
  /* Slightly stronger text shadow for light mode */
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  /* Add background clip to ensure gradient stays within text */
  -webkit-background-clip: text;
  background-clip: text;
  /* Ensure text is transparent to show gradient */
  color: transparent;
  -webkit-text-fill-color: transparent;
  /* Add subtle border to improve visibility */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  /* Adjust animation timing for smoother transition */
  animation: gradient-text 8s ease infinite;
  /* Add slight blur for smoother edges */
  filter: blur(0.2px);
}

/* Update the gradient animation for both themes */
@keyframes gradient-text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Add hover effect for both themes */
.hero-line-2:hover {
  filter: brightness(1.1) saturate(1.05);
  animation: gradient-text 4s ease infinite;
  cursor: default;
}

/* Ensure dark theme gradient remains unchanged */
.dark-theme .hero-line-2 {
  background: linear-gradient(
    to right,
    #6366f1, /* Original primary color */
    #8b5cf6, /* Secondary purple */
    #a855f7, /* Violet */
    #d946ef, /* Fuchsia */
    #e879f9, /* Bright purple */
    #c084fc, /* Soft lilac */
    #6366f1  /* Back to primary */
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  animation: gradient-text 8s ease infinite;
  filter: blur(0.2px);
}
</style>
