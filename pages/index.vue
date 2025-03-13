<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-black">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Full Stack Developer
            <span class="block text-primary">& UI/UX Designer</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Building modern web applications with cutting-edge technologies.
            Specializing in Vue.js, Node.js, and creating beautiful user experiences.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#projects"
              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View My Work
            </a>
            <a href="#contact" class="text-sm font-semibold leading-6 text-gray-300">
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </div>
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

    <!-- About Section -->
    <section id="about" class="py-24 bg-gray-900">
      <!-- About content will go here -->
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 bg-black">
      <!-- Skills content will go here -->
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-gray-900">
      <!-- Projects content will go here -->
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-24 bg-black">
      <!-- Experience content will go here -->
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gray-900">
      <!-- Contact content will go here -->
    </section>
  </div>
</template>

<script setup>
// Component logic will go here
</script> 