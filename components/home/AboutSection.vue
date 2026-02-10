<template>
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
</template>
