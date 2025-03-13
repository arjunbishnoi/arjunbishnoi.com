<template>
  <div class="min-h-screen bg-black">
    <!-- Navigation -->
    <header class="fixed w-full top-0 z-50">
      <!-- Mobile Navigation - Fullscreen overlay (Apple-style) -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-class="opacity-0 translate-y-[-100%]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-100%]"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
          style="z-index: 40; top: 0;"
        >
          <div class="flex flex-col items-center justify-center h-full">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-white text-xl font-bold lowercase mb-4"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </transition>

      <!-- Navbar (always visible, stays on top of overlay) -->
      <nav class="mx-auto max-w-7xl relative bg-black/80 backdrop-blur-sm z-50">
        <div class="px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <!-- Logo aligned to left -->
          <div class="flex-none">
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

          <!-- Placeholder to maintain layout -->
          <div class="w-5 flex-none md:hidden"></div>
        </div>
        
        <!-- Hamburger - with balanced clickable area -->
        <button 
          type="button"
          class="md:hidden absolute top-0 h-12 flex items-center justify-center cursor-pointer z-50"
          style="width: 48px; right: 4px;"
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
      </nav>
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

const navigationItems = [
  { name: 'about', href: '/#about' },
  { name: 'skills', href: '/#skills' },
  { name: 'projects', href: '/#projects' },
  { name: 'experience', href: '/#experience' },
  { name: 'contact', href: '/#contact' },
]

watch(isMobileMenuOpen, (isOpen) => {
  // Lock/unlock body scroll when menu opens/closes
  if (isOpen) {
    document.body.classList.add('overflow-hidden', 'fixed', 'inset-0');
  } else {
    document.body.classList.remove('overflow-hidden', 'fixed', 'inset-0');
  }
});

// Method to toggle mobile menu
const toggleMobileMenu = (event) => {
  event.preventDefault(); // Prevent default action
  isMobileMenuOpen.value = !isMobileMenuOpen.value; // Toggle the menu
  if (isMobileMenuOpen.value) {
    // Lock body scroll when menu opens
    document.body.classList.add('overflow-hidden', 'fixed', 'inset-0');
  } else {
    // Unlock body scroll when menu closes
    document.body.classList.remove('overflow-hidden', 'fixed', 'inset-0');
  }
};

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden', 'fixed', 'inset-0');
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
