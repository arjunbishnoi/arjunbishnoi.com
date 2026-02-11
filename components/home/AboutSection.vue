<template>
  <section id="about" class="relative py-16 z-40" style="background-color: var(--background-color);">
    <!-- Static Header -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl" style="color: var(--text-color);">About</h2>
    </div>
    
    <!-- About content -->
    <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <!-- Profile Image -->
        <div class="md:col-span-4 flex justify-center md:justify-start">
          <div class="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl group">
            <img 
              src="/arjun-bishnoi-profile.png" 
              alt="Arjun Bishnoi - Full Stack Developer & UI/UX Designer" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Content Columns -->
        <div class="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-accent mb-4">Who I Am</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              I'm Arjun Bishnoi, a mobile application developer and UI/UX designer passionate about creating smooth, engaging digital experiences. Whether I'm working in React Native, SwiftUI, or Kotlin for Android, I have one goal in mind: build apps that look polished, perform reliably, and feel intuitive from the very first tap. On the frontend, I focus on clean, responsive layouts. On the backend, I use tools like Firebase and Node.js to keep data flowing effortlessly.
            </p>
            <p class="text-gray-300 leading-relaxed">
              My workflow combines careful engineering with a genuine focus on users. Each feature solves a real problem and is crafted with pixel-perfect detail. I break challenges into clear steps and mix technical precision with creative flair so every project stands out.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-accent mb-4">My Journey</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              My passion for development began at George Brown College when I dove into mobile app strategy and implementation. I've built everything from a real-time cryptocurrency tracker in React Native to rental platform clones in SwiftUI and Kotlin. Each project has sharpened my skills and expanded my design sense.
            </p>
            <p class="text-gray-300 leading-relaxed">
              I'm always curious and eager to learn new things, whether that means exploring emerging libraries or fine-tuning performance. As I grow, I stay committed to trying fresh approaches and delivering user-focused applications that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
