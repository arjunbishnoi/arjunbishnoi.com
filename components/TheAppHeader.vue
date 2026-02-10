<template>
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
        <div class="hidden md:flex items-center ml-auto px-6 lg:px-8 space-x-6">
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

          <!-- Email Button -->
          <button
            type="button"
            class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
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

          <!-- Resume Download Button -->
          <button
            type="button"
            class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
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
        </div>
      
        <!-- Mobile actions: theme toggle, email, and menu -->
        <div class="md:hidden flex items-center px-6 lg:px-8 relative h-full ml-auto space-x-6">
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
            class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
            @click="sendEmail"
            style="height: var(--navbar-height);"
          >
            <span class="sr-only">Send email</span>
            <!-- Hit area for email -->
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

          <!-- Resume Download Button -->
          <button
            type="button"
            class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative"
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
          
          <!-- Hamburger button -->
          <button 
            type="button"
            class="flex items-center justify-center cursor-pointer relative z-10"
            style="height: var(--navbar-height);"
            @click.prevent="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hit area for hamburger -->
            <span class="absolute inset-y-0 left-[-3px] right-[999px]"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-2 0 28 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-gray-400 hover:text-white transition-colors"
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
          class="px-6 lg:px-8 pb-12 text-sm font-medium text-[#9CA3AF] text-center absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out"
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
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const { navigationItems, socialLinks } = useSiteData()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showFullLogo = computed(() => !isScrolled.value || isMobileMenuOpen.value)

const isDarkMode = ref(true)

const emit = defineEmits(['toggle-menu'])

watch(isMobileMenuOpen, (isOpen) => {
  emit('toggle-menu', isOpen)
  if (isOpen) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}, { flush: 'post' })

watch(isDarkMode, (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark-theme')
    document.documentElement.classList.remove('light-theme')
  } else {
    document.documentElement.classList.add('light-theme')
    document.documentElement.classList.remove('dark-theme')
  }
})

const toggleMobileMenu = (event: Event) => {
  event.preventDefault()
  requestAnimationFrame(() => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  })
}

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = socialLinks.resume
  link.download = socialLinks.resumeDownloadName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const sendEmail = () => {
  window.location.href = socialLinks.email
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.add('light-theme')
  }
})

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>
