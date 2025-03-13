<template>
  <div class="min-h-screen bg-black">
    <!-- Navigation -->
    <header class="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav class="mx-auto max-w-7xl relative">
        <div class="px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <!-- Logo aligned to left -->
          <div class="flex-none">
            <NuxtLink to="/" class="text-xl font-bold relative">
              <div class="relative">
                <!-- Full name version -->
                <div 
                  class="transition-all duration-300 ease-in-out absolute left-0"
                  :class="isScrolled ? 'opacity-0 transform scale-95' : 'opacity-100'"
                >
                  <span style="color: white;">a</span>
                  <span 
                    :style="{
                      color: 'white',
                      transition: 'all 300ms ease-in-out',
                      opacity: isScrolled ? 0 : 1
                    }"
                  >rjun</span>
                  <span 
                    :style="{
                      color: 'white',
                      transition: 'all 300ms ease-in-out',
                      transform: isScrolled ? 'translateX(-3.8rem)' : 'translateX(0)',
                      opacity: isScrolled ? 0 : 1
                    }"
                  >b</span>
                  <span 
                    :style="{
                      color: 'white',
                      transition: 'all 300ms ease-in-out',
                      opacity: isScrolled ? 0 : 1
                    }"
                  >ishnoi</span>
                  <span 
                    :style="{
                      color: '#9CA3AF',
                      transition: 'all 300ms ease-in-out',
                      transform: isScrolled ? 'translateX(-7.2rem)' : 'translateX(0)',
                      opacity: isScrolled ? 0 : 1
                    }"
                  >_</span>
                </div>
                <!-- Shortened version -->
                <div 
                  class="transition-all duration-300 ease-in-out absolute left-0 overflow-visible"
                  :style="{
                    opacity: !isScrolled ? 0 : 1
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

          <!-- Placeholder to maintain layout -->
          <div class="w-5 flex-none md:hidden"></div>
        </div>
        
        <!-- Hamburger - with balanced clickable area -->
        <button 
          type="button"
          class="md:hidden absolute top-0 h-12 flex items-center justify-center cursor-pointer"
          style="width: 48px; right: 4px;"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
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
      </nav>

      <!-- Mobile Navigation -->
      <transition
        enter-class="opacity-0 max-h-0"
        enter-active-class="transition-all duration-300 ease-in-out"
        enter-to-class="opacity-100 max-h-96"
        leave-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-to-class="opacity-0 max-h-0"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="md:hidden overflow-hidden bg-black/95"
        >
          <div class="space-y-0 py-3 px-4">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.href"
              class="block py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="pt-12 bg-black text-white">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navigationItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply font-sans antialiased text-white;
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
</style>
