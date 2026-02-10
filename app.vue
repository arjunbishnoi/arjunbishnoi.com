<template>
  <div class="min-h-screen bg-black fixed-bg">
    <!-- Add Apple-specific meta tags -->
    <Head>
      <!-- Apple Touch Icon -->
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png">
      <link rel="apple-touch-icon" href="/favicon.png">
      
      <!-- Apple Mobile Web App Capable -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="apple-mobile-web-app-title" content="Arjun Bishnoi">
      
      <!-- Apple Splash Screen Images -->
      <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png">
      <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png">
      <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png">
      <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png">
      <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://arjunbishnoi.com/">
      <meta property="og:title" content="Arjun Bishnoi - Web & Mobile Designer/Developer">
      <meta property="og:description" content="Mobile apps, web development, and design. Consistent, hands-on, and always evolving.">
      <meta property="og:image" content="https://arjunbishnoi.com/4rent.png">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://arjunbishnoi.com/">
      <meta property="twitter:title" content="Arjun Bishnoi - Web & Mobile Designer/Developer">
      <meta property="twitter:description" content="Mobile apps, web development, and design. Consistent, hands-on, and always evolving.">
      <meta property="twitter:image" content="https://arjunbishnoi.com/4rent.png">
    </Head>

    <TheAppHeader @toggle-menu="onToggleMenu" />

    <!-- Favicon Image Section -->
    <div class="w-full flex justify-center items-center pt-24 pb-0 relative z-10 pointer-events-none">
      <img 
        src="/favicon.png" 
        alt="Arjun Bishnoi Logo" 
        class="w-32 h-32 object-contain transition-transform duration-300 hover:scale-105 pointer-events-auto"
      />
    </div>

    <!-- Main Content -->
    <main class="pt-0 bg-black text-white" :class="{ 'overflow-hidden': isMobileMenuOpen }">
      <NuxtPage />
    </main>
    
    <TheAppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const onToggleMenu = (isOpen: boolean) => {
  isMobileMenuOpen.value = isOpen
}
</script>

<style>
@import '~/assets/css/main.css';
</style>
