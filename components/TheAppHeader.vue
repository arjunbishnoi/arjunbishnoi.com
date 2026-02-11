<template>
  <header class="fixed w-full top-0 z-50">
    <!-- Navbar with integrated mobile menu -->
    <div 
      class="backdrop-blur-md overflow-hidden"
      :class="isDarkMode ? 'bg-black/80' : 'bg-white/80'"
      :style="{
        transition: 'height 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
        height: isMobileMenuOpen ? '100vh' : 'var(--navbar-height)',
        minHeight: 'var(--navbar-height)'
      }"
    >
      <!-- Top navbar section -->
      <div class="mx-auto max-w-7xl h-10 flex items-center relative">
        <!-- Logo -->
        <div class="flex-none px-6 lg:px-8">
          <NuxtLink to="/" class="text-xl font-bold relative block cursor-pointer" aria-label="Go to homepage" @click="handleLogoClick">
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
                class="transition-all duration-300 ease-in-out absolute left-0 overflow-visible whitespace-nowrap flex items-center"
                :style="{
                  opacity: showFullLogo ? 0 : 1,
                  transform: showFullLogo ? 'translateX(-20px)' : 'translateX(0)'
                }"
              >
                <span :style="{ color: isDarkMode ? 'white' : '#111827' }">a</span>
                <span :style="{ color: isDarkMode ? 'white' : '#111827' }">b</span>
                <span :style="{ color: isDarkMode ? '#9CA3AF' : '#6B7280' }">_</span>
              </div>
            </div>
            <!-- Spacer to maintain layout -->
            <span class="opacity-0">arjunbishnoi_</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation in center -->
        <div class="hidden md:flex items-center justify-center flex-1 absolute left-0 right-0 pointer-events-none" style="z-index: 1;">
          <nav class="flex items-center space-x-8 pointer-events-auto">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium transition-colors nav-link"
              :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            >
              {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Desktop actions on right side -->
        <div class="hidden md:flex items-center ml-auto px-6 lg:px-8 space-x-4" style="z-index: 2;">
          <!-- Theme Toggle -->
          <button
            type="button"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors cursor-pointer"
            :class="isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'"
            @click="toggleTheme"
          >
            <span class="sr-only">Toggle theme</span>
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
          <a
            :href="socialLinks.email"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'"
            aria-label="Send email"
          >
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
          </a>

          <!-- Resume Download Button -->
          <a
            :href="socialLinks.resume"
            :download="socialLinks.resumeDownloadName"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'"
            aria-label="Download Resume"
          >
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
          </a>
        </div>
      
        <!-- Mobile actions: theme toggle, email, and menu -->
        <div class="md:hidden flex items-center px-6 relative h-full ml-auto space-x-4" style="z-index: 2;">
          <!-- Theme Toggle -->
          <button
            type="button"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors cursor-pointer"
            :class="isDarkMode ? 'text-gray-400 active:text-white' : 'text-gray-500 active:text-gray-900'"
            @click="toggleTheme"
          >
            <span class="sr-only">Toggle theme</span>
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
          <a
            :href="socialLinks.email"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="isDarkMode ? 'text-gray-400 active:text-white' : 'text-gray-500 active:text-gray-900'"
            aria-label="Send email"
          >
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
          </a>

          <!-- Resume Download Button -->
          <a
            :href="socialLinks.resume"
            :download="socialLinks.resumeDownloadName"
            class="flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="isDarkMode ? 'text-gray-400 active:text-white' : 'text-gray-500 active:text-gray-900'"
            aria-label="Download Resume"
          >
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
          </a>
          
          <!-- Hamburger button -->
          <button 
            type="button"
            class="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer transition-colors"
            :class="isDarkMode ? 'text-gray-400 active:text-white' : 'text-gray-500 active:text-gray-900'"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-2 0 28 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M4.5 8h15" 
                class="transition-all duration-300 ease-in-out"
                :style="{
                  transform: isMobileMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                  transformOrigin: 'center'
                }"
              />
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M4.5 16h15" 
                class="transition-all duration-300 ease-in-out"
                :style="{
                  transform: isMobileMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                  transformOrigin: 'center'
                }"
              />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu items (only rendered when open) - removed v-show to allow animations -->
      <div 
        class="md:hidden"
        :class="{ 'pointer-events-none': !isMobileMenuOpen }"
        :style="{
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: 'opacity 300ms ease-in-out'
        }"
      >
        <nav class="menu-items-container px-6 lg:px-8 pt-8">
          <div 
            v-for="(item, index) in navigationItems" 
            :key="item.name"
            class="transform transition-all duration-500 ease-out mb-4"
            :style="{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: `translateY(${isMobileMenuOpen ? 0 : 20}px) scale(${isMobileMenuOpen ? 1 : 0.95})`,
              transitionDelay: isMobileMenuOpen 
                ? `${100 * index + 150}ms` 
                : '0ms'
            }"
          >
            <NuxtLink 
              :to="item.href"
              class="text-xl font-bold transition-colors nav-link"
              :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
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
              transform: `translateY(${isMobileMenuOpen ? 0 : 20}px) scale(${isMobileMenuOpen ? 1 : 0.95})`,
            transitionDelay: isMobileMenuOpen ? `${100 * navigationItems.length + 150}ms` : '0ms'
            }"
          >
          <a
              :href="socialLinks.resume"
              :download="socialLinks.resumeDownloadName"
              class="text-xl font-bold transition-colors nav-link"
              :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'"
            >
              Download Resume
            </a>
          </div>
        </nav>
        
        <!-- Footer text - appears after menu is fully open -->
        <div 
          class="px-6 lg:px-8 pb-12 text-sm font-medium text-center absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out"
          :style="{
            color: isDarkMode ? '#9CA3AF' : '#8e8e93',
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: `translateY(${isMobileMenuOpen ? 0 : 20}px)`,
            transitionDelay: isMobileMenuOpen ? '800ms' : '0ms',
            transitionDuration: '1000ms'
          }"
        >
          made with <span class="text-red-500">❤</span> by arjun
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const { navigationItems, socialLinks } = useSiteData()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showFullLogo = computed(() => !isScrolled.value || isMobileMenuOpen.value)

const isDarkMode = ref(true)

const emit = defineEmits(['toggle-menu'])

// SSR-safe: useHead sets the class on <html> during BOTH server and client rendering
// This prevents hydration mismatch because the static HTML will already have the correct class
useHead({
  htmlAttrs: {
    class: computed(() => isDarkMode.value ? 'dark-theme' : 'light-theme')
  }
})

watch(isMobileMenuOpen, (isOpen) => {
  emit('toggle-menu', isOpen)
  if (import.meta.client) {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
}, { flush: 'post' })

watch(isDarkMode, (isDark) => {
  if (!import.meta.client) return
  if (isDark) {
    document.documentElement.style.backgroundColor = '#000000'
    document.body.style.backgroundColor = '#000000'
  } else {
    document.documentElement.style.backgroundColor = '#ffffff'
    document.body.style.backgroundColor = '#ffffff'
  }
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const handleLogoClick = (e: Event) => {
  if (route.path === '/') {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>
