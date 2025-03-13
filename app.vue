<template>
  <div class="min-h-screen bg-black">
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

          <!-- Hamburger button -->
          <button 
            type="button"
            class="md:hidden flex items-center justify-center cursor-pointer relative px-4 sm:px-6 lg:px-8"
            style="height: 48px;"
            @click.prevent="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
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
                class="text-white text-xl font-bold lowercase"
                @click="toggleMobileMenu"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
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
}

body {
  @apply font-sans antialiased text-white;
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
