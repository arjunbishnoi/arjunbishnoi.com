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
        <div class="mx-auto max-w-7xl h-12 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-none px-4 sm:px-6 lg:px-8">
            <NuxtLink to="/" class="text-xl font-bold relative">
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
            </NuxtLink>
          </div>

          <!-- Desktop Navigation in center -->
          <div class="hidden md:flex md:items-center md:space-x-8 md:flex-auto md:justify-center">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Mobile actions: theme toggle, email, and menu -->
          <div class="md:hidden flex items-center px-4 sm:px-6 lg:px-8 relative h-full">
            <!-- Theme Toggle -->
            <button
              type="button"
              class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
              @click="toggleTheme"
              style="height: var(--navbar-height);"
            >
              <span class="sr-only">Toggle theme</span>
              <!-- Hit area for theme toggle (extends left to screen edge, right to half way to email) -->
              <span class="absolute inset-y-0 left-[-999px] right-[calc(50%-3px)]"></span>
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
          <div class="menu-items-container px-4 sm:px-6 lg:px-8">
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
                class="text-gray-400 text-xl font-bold lowercase hover:text-white transition-colors"
                @click="toggleMobileMenu"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Footer text -->
          <div 
            class="px-4 sm:px-6 lg:px-8 pb-24 text-sm font-medium text-[#9CA3AF] text-center absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out"
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
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showFullLogo = computed(() => !isScrolled.value || isMobileMenuOpen.value)
const scrollPosition = ref(0)
const isDarkMode = ref(true) // Start with dark mode by default since your site is dark

const navigationItems = [
  { name: 'about', href: '/#about' },
  { name: 'skills', href: '/#skills' },
  { name: 'projects', href: '/#projects' },
  { name: 'experience', href: '/#experience' },
  { name: 'contact', href: '/#contact' },
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
</style>
