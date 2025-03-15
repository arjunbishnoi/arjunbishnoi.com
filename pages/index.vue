<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-black">
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 pb-4 sm:pb-8">
        <div class="text-center">
          <div class="inline-block">
            <h1 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Web & Mobile
              <span class="block text-primary">Designer / Developer</span>
          </h1>
            <p class="mt-5 sm:mt-8 text-lg leading-8 text-gray-300 mx-auto w-11/12 sm:w-auto max-w-2xl hero-text">
              Crafting elegant web solutions with 
              precision. Specialized in React, 
              Vue.js, and intuitive experiences 
              that solve real problems.
            </p>
          </div>
          
          <!-- Technology Icons with scroll animation - full width on mobile, container width on desktop -->
          <div class="mt-8 w-screen md:w-full left-1/2 relative -translate-x-1/2 md:transform-none">
            <div class="tech-scroll-container">
              <div class="tech-scroll">
                <!-- Vue.js -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#41B883] to-[#34495E] flex items-center justify-center shadow-sm mx-4" style="--i: 0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M19.197 1.608l.003.001h-4.425L12 6.4v.002l-2.772-4.793H4.803v.001h-.005v.001L12 18.833l7.202-12.424v-.001l.001-.001h-.006z" />
                  </svg>
                </div>
                
                <!-- React -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#61DAFB] to-[#2D6CDF] flex items-center justify-center shadow-sm mx-4" style="--i: 1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="none" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-3.5c-2.486 0-4.5-2.014-4.5-4.5s2.014-4.5 4.5-4.5 4.5 2.014 4.5 4.5-2.014 4.5-4.5 4.5z" />
                  </svg>
                </div>
                
                <!-- Tailwind CSS -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#38BDF8] to-[#0F172A] flex items-center justify-center shadow-sm mx-4" style="--i: 2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                </div>
                
                <!-- JavaScript -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#F7DF1E] to-[#C9B018] flex items-center justify-center shadow-sm mx-4" style="--i: 3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                
                <!-- Node.js -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#83CD29] to-[#43853D] flex items-center justify-center shadow-sm mx-4" style="--i: 4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M11.998 24c-.321 0-.641-.084-.923-.249l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.325-.604.066-.037.151-.024.219.015l2.255 1.339c.82.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.927c0-.099-.053-.192-.134-.238l-8.791-5.072c-.081-.047-.187-.047-.269 0L2.859 6.689c-.083.047-.135.14-.135.238v10.148c0 .097.052.19.134.237l2.408 1.392c1.306.652 2.105-.116 2.105-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.304-1.325c-.57-.329-.923-.943-.923-1.604V6.926c0-.661.352-1.275.923-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.603v10.148c0 .661-.354 1.273-.924 1.603l-8.794 5.078c-.282.163-.602.247-.923.247zm3.326-12.233c-3.949 0-4.771-1.815-4.771-3.337 0-.142.114-.253.255-.253h1.136c.127 0 .232.092.253.212.172 1.168.683 1.756 3.127 1.756 1.926 0 2.746-.435 2.746-1.458 0-.589-.231-1.026-3.225-1.319-2.502-.246-4.048-.799-4.048-2.708 0-1.784 1.505-2.847 4.029-2.847 2.832 0 4.23.983 4.406 3.094.006.068-.019.134-.067.184a.25.25 0 01-.181.074h-1.139c-.118 0-.221-.083-.245-.198-.274-1.193-.94-1.575-2.774-1.575-2.041 0-2.279.712-2.279 1.243 0 .646.28.834 3.126 1.198 2.809.357 4.146.862 4.146 2.82 0 1.924-1.609 3.075-4.418 3.075z" />
                  </svg>
                </div>

                <!-- Vue.js (duplicate for continuous loop) -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#41B883] to-[#34495E] flex items-center justify-center shadow-sm mx-4" style="--i: 5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M19.197 1.608l.003.001h-4.425L12 6.4v.002l-2.772-4.793H4.803v.001h-.005v.001L12 18.833l7.202-12.424v-.001l.001-.001h-.006z" />
                  </svg>
                </div>
                
                <!-- React (duplicate for continuous loop) -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#61DAFB] to-[#2D6CDF] flex items-center justify-center shadow-sm mx-4" style="--i: 6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="none" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-3.5c-2.486 0-4.5-2.014-4.5-4.5s2.014-4.5 4.5-4.5 4.5 2.014 4.5 4.5-2.014 4.5-4.5 4.5z" />
                  </svg>
                </div>
                
                <!-- Tailwind CSS (duplicate for continuous loop) -->
                <div class="h-10 w-10 rounded-md bg-gradient-to-br from-[#38BDF8] to-[#0F172A] flex items-center justify-center shadow-sm mx-4" style="--i: 7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/resume.pdf"
              class="resume-btn rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors"
              download
            >
              Download Resume
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

    <!-- Projects Section -->
    <section id="projects" class="relative py-16 bg-black">
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
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="E-Commerce Platform Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
              <p class="text-gray-400 mb-4">
                A full-featured e-commerce platform built with React, Node.js, and MongoDB. 
                Features include product search, filtering, cart management, user authentication, 
                and payment processing.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Stripe</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Task Management App Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tl from-secondary/40 to-primary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Task Management App</h3>
              <p class="text-gray-400 mb-4">
                A productivity app that helps users organize tasks, set priorities, and track progress. 
                Built with Vue.js and Firebase, featuring real-time updates and collaborative features.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Firebase</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Tailwind CSS</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vuex</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
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

    <!-- Experience Section -->
    <section id="experience" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/experience" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Experience</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Experience content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="space-y-12">
          <!-- Experience Item 1 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Senior Frontend Developer</h3>
              <p class="text-primary font-medium mb-2">TechCorp Inc. • 2021 - Present</p>
              <p class="text-gray-400 mb-4">
                Led the development of the company's flagship SaaS product, implementing 
                modern frontend architecture and improving performance by 40%.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Architected and implemented a new component system using React and TypeScript</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Improved application performance and reduced load times by 40%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborated with design team to implement a new design system</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Experience Item 2 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Full Stack Developer</h3>
              <p class="text-primary font-medium mb-2">Web Solutions Ltd. • 2018 - 2021</p>
              <p class="text-gray-400 mb-4">
                Developed and maintained multiple client projects, focusing on responsive design 
                and cross-browser compatibility.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built RESTful APIs using Node.js and Express for various client projects</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented responsive designs and ensured cross-browser compatibility</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Integrated third-party services and APIs into client applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/about" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">About</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- About content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">Who I Am</h3>
            <p class="text-gray-300 mb-6">
              I'm a full stack developer and UI/UX designer with a passion for creating 
              elegant, responsive, and user-friendly applications. With expertise in modern 
              frontend and backend technologies, I build solutions that not only work flawlessly 
              but also provide exceptional user experiences.
            </p>
            <p class="text-gray-300">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that the applications I build are not only functionally robust but 
              also visually appealing and intuitive to use.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">My Journey</h3>
            <p class="text-gray-300 mb-6">
              My journey into web development began with a curiosity about how digital 
              experiences are built. Over the years, I've honed my skills across the full 
              stack, from crafting pixel-perfect UIs to architecting scalable backend systems.
            </p>
            <p class="text-gray-300">
              I'm constantly learning and adapting to new technologies and best practices, 
              ensuring that my work remains current and innovative in a rapidly evolving 
              digital landscape.
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
          <NuxtLink to="/contact" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Contact</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
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
// Component logic will go here
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

/* Technology Icons scroll animation */
.tech-scroll-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 8px 0;
  /* Removing basic mask in favor of pseudo-elements for more advanced effects */
  /* mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); */
}

/* Add futuristic edge effects with pseudo-elements */
.tech-scroll-container::before,
.tech-scroll-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20%;
  z-index: 2;
  pointer-events: none;
}

.tech-scroll-container::before {
  left: 0;
  background: linear-gradient(to right, 
    rgba(0, 0, 0, 1), 
    rgba(0, 0, 0, 0.8) 10%, 
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  /* Removing the strong blur effect */
  /* backdrop-filter: blur(3px); */
  /* -webkit-backdrop-filter: blur(3px); */
  /* Reducing the shadow intensity */
  box-shadow: none;
}

.tech-scroll-container::after {
  right: 0;
  background: linear-gradient(to left, 
    rgba(0, 0, 0, 1), 
    rgba(0, 0, 0, 0.8) 10%, 
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  /* Removing the strong blur effect */
  /* backdrop-filter: blur(3px); */
  /* -webkit-backdrop-filter: blur(3px); */
  /* Reducing the shadow intensity */
  box-shadow: none;
}

/* Futuristic glow effect for the container - making it more subtle */
.tech-scroll-container {
  /* Removing the box-shadow to eliminate background glow */
  box-shadow: none;
}

.tech-scroll {
  display: flex;
  animation: scroll 20s linear infinite;
  width: max-content;
  padding: 0 20vw; /* Increasing padding to ensure icons fully disappear in vignette */
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move to show the second set of icons */
  }
}

/* Optional: pause animation on hover */
.tech-scroll-container:hover .tech-scroll {
  animation-play-state: paused;
}

/* Futuristic glow effect for the tech icons */
.tech-scroll > div {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-scroll > div::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  background: radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%);
  animation: pulse 4s infinite;
  animation-delay: calc(var(--i, 0) * 0.5s);
}

.tech-scroll > div:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}

.tech-scroll > div:hover::after {
  opacity: 0.5;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
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
}
</style> 