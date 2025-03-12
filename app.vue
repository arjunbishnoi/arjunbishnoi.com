<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <header class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-dark">
              Arjun Bishnoi
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium text-gray-500 hover:text-dark transition-colors"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button 
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMobileMenuOpen" 
        class="md:hidden"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-dark"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
]
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply font-sans antialiased text-dark;
}
</style>
