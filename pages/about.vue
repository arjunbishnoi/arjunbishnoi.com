<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          About Me
          <span class="block text-xl text-primary mt-2">The person behind the code</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          Get to know more about my background, values, approach to development, 
          and what drives me to create meaningful digital experiences.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Left Column (3/5) -->
        <div class="lg:col-span-3">
          <!-- Bio Section -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-6">Who I Am</h2>
            <div class="prose prose-invert max-w-none">
              <p class="text-gray-300">
                I'm Arjun Bishnoi, a passionate full-stack developer and UI/UX designer with over 6 years of experience 
                in creating web applications that combine technical excellence with exceptional user experiences.
              </p>
              <p class="text-gray-300 mt-4">
                My journey into web development began during my undergraduate studies when I became fascinated by the 
                intersection of design and technology. This passion led me to specialize in creating digital experiences 
                that are not only functionally robust but also visually appealing and intuitive to use.
              </p>
              <p class="text-gray-300 mt-4">
                Beyond coding, I'm an avid photographer, hiking enthusiast, and a perpetual learner. I believe that 
                these diverse interests enrich my perspective and contribute to my approach to problem-solving in 
                development.
              </p>
            </div>
          </div>
          
          <!-- My Approach Section -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-6">My Approach</h2>
            <div class="space-y-6">
              <div class="bg-gray-900/50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-primary mb-3">User-Centered Design</h3>
                <p class="text-gray-300">
                  I believe that great technology should serve people, not the other way around. I approach each project 
                  by first understanding the needs and goals of the end users, ensuring that the solutions I build truly 
                  address real problems and enhance the user's experience.
                </p>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-primary mb-3">Technical Excellence</h3>
                <p class="text-gray-300">
                  Writing clean, maintainable, and performant code is a core value in my development practice. I stay 
                  current with the latest technologies and best practices, but I'm also pragmatic about choosing the 
                  right tools for each specific project rather than following trends blindly.
                </p>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-primary mb-3">Continuous Learning</h3>
                <p class="text-gray-300">
                  The tech landscape is constantly evolving, and I'm committed to growing with it. I dedicate time to 
                  learning new technologies, experimenting with different approaches, and refining my skills. This 
                  commitment to growth ensures that I can always bring fresh ideas and solutions to the table.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Values Section -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-6">My Values</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-900/50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white ml-3">Efficiency</h3>
                </div>
                <p class="text-gray-300">
                  I value solutions that optimize both development time and runtime performance, creating systems 
                  that work smarter, not harder.
                </p>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white ml-3">Collaboration</h3>
                </div>
                <p class="text-gray-300">
                  The best results come from diverse perspectives working together. I thrive in collaborative 
                  environments and enjoy the synergy of team problem-solving.
                </p>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white ml-3">Quality</h3>
                </div>
                <p class="text-gray-300">
                  I take pride in delivering high-quality work that stands the test of time. This means 
                  attention to detail, thorough testing, and a commitment to excellence in every line of code.
                </p>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-white ml-3">Innovation</h3>
                </div>
                <p class="text-gray-300">
                  I'm always looking for creative solutions and new approaches to challenging problems, believing that 
                  innovation can arise from a blend of established practices and fresh perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column (2/5) -->
        <div class="lg:col-span-2">
          <!-- Profile Photo -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden mb-10">
            <div class="relative aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Arjun Bishnoi" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-xl font-bold text-white">Arjun Bishnoi</h3>
                <p class="text-gray-300">Full Stack Developer & Designer</p>
              </div>
            </div>
          </div>
          
          <!-- Personal Info -->
          <div class="bg-gray-900/50 rounded-lg p-6 mb-10">
            <h3 class="text-xl font-semibold text-white mb-4">Personal Info</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:contact@arjunbishnoi.com" class="text-gray-300 hover:text-white transition-colors">contact@arjunbishnoi.com</a>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-gray-400 text-sm mb-1">Location</p>
                  <p class="text-gray-300">San Francisco, CA</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-gray-400 text-sm mb-1">Currently</p>
                  <p class="text-gray-300">Senior Frontend Developer at TechCorp Inc.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <!-- Interests -->
          <div class="bg-gray-900/50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-white mb-4">Beyond Coding</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full text-primary mr-3 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-medium">Photography</h4>
                  <p class="text-gray-400 mt-1">I enjoy landscape and street photography, capturing moments and perspectives that often go unnoticed.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full text-primary mr-3 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-medium">Hiking</h4>
                  <p class="text-gray-400 mt-1">Exploring trails and mountains helps me disconnect from technology and reconnect with nature.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full text-primary mr-3 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-medium">Reading</h4>
                  <p class="text-gray-400 mt-1">I'm an avid reader of both technical books and fiction, particularly sci-fi and philosophical works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Let's Connect</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
            Get In Touch
          </NuxtLink>
          <a href="/resume.pdf" class="px-6 py-3 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 rounded-md inline-block transition-colors" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
        <span aria-hidden="true">←</span> Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'About Me | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Learn more about Arjun Bishnoi, a full-stack developer and UI/UX designer passionate about creating exceptional digital experiences.' }
  ]
})
</script> 