<template>
  <div>
    <!-- Hero Section with natural height and centered content -->
    <section class="relative overflow-hidden bg-black hero-section flex flex-col items-center justify-center min-h-screen">
      <!-- Top area with title and paragraph - keeping original positioning -->
      <div class="mx-auto max-w-7xl px-4 pt-12 pb-2 sm:pb-4 lg:px-8 w-full">
        <div class="text-center hero-content w-full flex items-center justify-center flex-col">
          <div class="inline-block hero-title-wrapper w-full">
            <h1 class="font-bold tracking-tight text-white text-center max-w-full leading-none w-full">
              <!-- Mobile-first hero title with controlled line breaks and smooth size scaling -->
              <span class="hero-title-container inline-block text-center w-full">
                <span class="hero-title-line hero-line-1 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="font-size: 30px !important; line-height: 1.0;">Web &amp; Mobile</span>
                <span class="hero-title-line hero-line-2 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="font-size: 30px !important; line-height: 1.0;">Designer / Developer</span>
              </span>
            </h1>
            <p class="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg leading-6 xs:leading-7 sm:leading-7 text-gray-300 w-[95%] max-w-md sm:w-auto sm:max-w-2xl hero-text font-medium px-2 sm:px-0">
              Mobile apps, web development, and design. Consistent, hands-on, and always evolving.
            </p>
          </div>
        </div>
      </div>
          
      
      
      <!-- Social Links -->
      <div class="flex items-center justify-center space-x-8 mb-4 mt-6">
        <!-- LinkedIn -->
        <a 
          href="https://www.linkedin.com/in/arjun-bishnoi-b981bb104" 
          target="_blank" 
          rel="noopener noreferrer"
          class="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-gray-300 group-hover:fill-white transition-colors">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <!-- GitHub -->
        <a 
          href="https://github.com/arjunbishnoi" 
          target="_blank" 
          rel="noopener noreferrer"
          class="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-gray-300 group-hover:fill-white transition-colors">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
      
      <!-- Bottom area with buttons and scroll arrow - with adaptive margins for different devices -->
      <div class="w-full flex flex-col items-center justify-center mb-0 pb-4 sm:pb-4 sm:mb-4 md:mb-6 mt-4 relative z-40">
        <!-- Buttons -->
        <div class="flex items-center justify-center gap-x-6">
          <a
            href="/Resume - Arjun Bishnoi.pdf"
            class="resume-btn rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors"
            download
          >
            Download Resume
          </a>
          <a href="#contact" class="text-sm font-semibold leading-6 text-gray-300">
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </div>
        
        <!-- Scroll down indicator - moved up on mobile -->
        <div class="scroll-indicator mt-2 sm:mt-4 pb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-400 animate-bounce-subtle" :class="{'opacity-0': scrolledDown}">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>

      <!-- Background gradient effect -->
      <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative py-0 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/projects" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Projects</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Projects content -->
      <div class="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- CryptoTracker logo image -->
              <img 
                src="/cryptotracker.png" 
                alt="Cryptocurrency Tracker App" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Cryptocurrency Tracker</h3>
              <p class="text-gray-400 mb-4">
                A cross-platform cryptocurrency tracker built with React Native, Expo, and Firebase Firestore. 
                Features include real-time market data via the CoinLore API, detailed coin statistics, 
                favorites management, pull-to-refresh, and seamless, native-feel navigation.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React Native</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Expo</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Firebase</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">CoinLore API</span>
              </div>
              <div class="flex gap-4">
                <a href="https://github.com/arjunbishnoi/CryptoTracker" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- 4rent app image -->
              <img 
                src="/4rent.png" 
                alt="4rent iOS Rental Marketplace App" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tl from-secondary/40 to-primary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">4rent</h3>
              <p class="text-gray-400 mb-4">
                A modern iOS rental marketplace built with SwiftUI, Combine, and MVVM architecture. 
                Features include infinite-scroll property listings, high-resolution image galleries, 
                detailed amenity and pricing views, favorites management, and fully adaptive layouts across all iPhone screen sizes.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">SwiftUI</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Combine</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MVVM</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">iOS</span>
              </div>
              <div class="flex gap-4">
                <a href="https://github.com/arjunbishnoi/4rent" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/skills" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Skills</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Skills content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Frontend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> React.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Vue.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Next.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Nuxt.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Tailwind CSS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> JavaScript/TypeScript
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Backend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Node.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Express
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> MongoDB
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> PostgreSQL
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> REST API Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> GraphQL
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Design & Tools</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> UI/UX Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Figma
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Git & GitHub
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Docker
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> AWS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-white">About</h2>
        </div>
      </div>
      
      <!-- About content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">Who I Am</h3>
            <p class="text-gray-300 mb-6">
              I'm Arjun Bishnoi, a mobile application developer and UI/UX designer passionate about creating smooth, engaging digital experiences. Whether I'm working in React Native, SwiftUI, or Kotlin for Android, I have one goal in mind: build apps that look polished, perform reliably, and feel intuitive from the very first tap. On the frontend, I focus on clean, responsive layouts. On the backend, I use tools like Firebase and Node.js to keep data flowing effortlessly.
            </p>
            <p class="text-gray-300">
              My workflow combines careful engineering with a genuine focus on users. Each feature solves a real problem and is crafted with pixel-perfect detail. I break challenges into clear steps and mix technical precision with creative flair so every project stands out.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">My Journey</h3>
            <p class="text-gray-300 mb-6">
              My passion for development began at George Brown College when I dove into mobile app strategy and implementation. I've built everything from a real-time cryptocurrency tracker in React Native to rental platform clones in SwiftUI and Kotlin. Each project has sharpened my skills and expanded my design sense.
            </p>
            <p class="text-gray-300">
              I'm always curious and eager to learn new things, whether that means exploring emerging libraries or fine-tuning performance. As I grow, I stay committed to trying fresh approaches and delivering user-focused applications that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-white">Contact</h2>
        </div>
      </div>
      
      <!-- Contact content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <h3 class="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p class="text-gray-300">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            a project in mind, or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div class="max-w-xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state for scroll indicator visibility
const scrolledDown = ref(false);

// Handle scroll events to show/hide the indicator
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  // Show indicator only when near top of page (e.g., less than 100px scrolled)
  scrolledDown.value = window.scrollY > 100;
}
</script> 

<style>
/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Define primary and secondary colors */
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
}

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



@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.02);
  }
}

/* Subtle bounce animation for scroll indicator */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Scroll indicator styling */
.scroll-indicator {
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.4s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator svg {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scroll-indicator svg.opacity-0 {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* Hide scroll indicator on larger screens where it's less needed */
@media (min-width: 1280px) {
  .scroll-indicator {
    opacity: 0.4;
  }
}

/* Mobile-optimized hero text with balanced lines */
@media (max-width: 640px) {
  .hero-text {
    text-align-last: center;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
    line-height: 1.8;
  }
  
  /* Ensure buttons are visible and properly spaced on mobile */
  .resume-btn {
    background-color: white !important;
    color: black !important;
    border: 1px solid white !important;
    padding: 0.75rem 1.5rem !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    border-radius: 0.375rem !important;
    text-decoration: none !important;
    display: inline-block !important;
    transition: all 0.2s ease !important;
  }
  
  .resume-btn:hover {
    background-color: transparent !important;
    color: white !important;
    border-color: white !important;
  }
  
  /* Ensure scroll indicator is visible on mobile */
  .scroll-indicator svg {
    fill: #9ca3af !important; /* gray-400 */
    opacity: 0.8 !important;
  }
  
  /* Ensure proper spacing for button container on mobile */
  .flex.items-center.justify-center.gap-x-6 {
    gap: 1.5rem !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
}

/* Ensure hero text stays at three lines consistently across all screen sizes */
@media (min-width: 768px) {
  .hero-text {
    max-width: none; /* Allow natural expansion */
    min-width: 42rem; /* Minimum width to ensure 2 lines on larger screens */
    white-space: normal;
    line-height: 1.7;
  }
}

/* Animated gradient text effect for the second hero line */
.hero-line-2 {
  background: linear-gradient(
    90deg,
    #6366f1,
    #8b5cf6,
    #a855f7,
    #d946ef,
    #e879f9,
    #c084fc,
    #6366f1
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-text 8s linear infinite;
  display: inline-block;
  font-weight: 700;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: filter 0.3s ease;
  padding-bottom: 0.1em;
}

/* Hover effect to make gradient more vibrant */
.hero-line-2:hover {
  filter: brightness(1.1) saturate(1.05);
  animation: gradient-text 4s linear infinite;
  cursor: default;
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
  background: linear-gradient(
    90deg,
    #4f46e5,
    #7c3aed,
    #9333ea,
    #c026d3,
    #a21caf,
    #8b5cf6,
    #4f46e5
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  animation: gradient-text 8s linear infinite;
  filter: blur(0.2px);
}

/* Ensure dark theme gradient remains unchanged */
.dark-theme .hero-line-2 {
  background: linear-gradient(
    90deg,
    #6366f1,
    #8b5cf6,
    #a855f7,
    #d946ef,
    #e879f9,
    #c084fc,
    #6366f1
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
  animation: gradient-text 8s linear infinite;
  filter: blur(0.2px);
}
</style> 