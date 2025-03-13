<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Experience
          <span class="block text-xl text-primary mt-2">My professional journey</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          A timeline of my professional experience, showcasing my growth as a developer
          and the impact I've made across different organizations.
        </p>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div class="relative border-l border-gray-800 ml-4 md:ml-8 pl-8 space-y-20">
        <!-- Experience Item 1 -->
        <div class="relative">
          <!-- Timeline marker -->
          <div class="absolute w-5 h-5 bg-primary rounded-full -left-[42px] top-1"></div>
          
          <!-- Content -->
          <div>
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h2 class="text-2xl font-bold text-white">Senior Frontend Developer</h2>
              <div class="text-primary mt-1 md:mt-0">2021 - Present</div>
            </div>
            <h3 class="text-xl font-medium text-gray-300 mb-4">TechCorp Inc.</h3>
            
            <div class="bg-gray-900/50 rounded-lg p-6 mb-6">
              <p class="text-gray-300 mb-4">
                Leading the development of TechCorp's flagship SaaS platform, focusing on performance 
                optimization, component architecture, and mentoring junior developers.
              </p>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Responsibilities</h4>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Lead a team of 5 frontend developers, managing sprint planning and code reviews</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Architect and implement new features using React, TypeScript, and GraphQL</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborate with product managers and designers to refine product requirements</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Establish coding standards and best practices for the frontend team</span>
                </li>
              </ul>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Reduced application load time by 40% through code splitting, lazy loading, and performance optimizations</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented a comprehensive component library that increased development velocity by 30%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Led the migration from REST to GraphQL, reducing API calls by 60% and improving data fetching efficiency</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Introduced automated testing that increased test coverage from 40% to 80%</span>
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">TypeScript</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">GraphQL</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Redux</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Design Systems</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Team Leadership</span>
            </div>
          </div>
        </div>
        
        <!-- Experience Item 2 -->
        <div class="relative">
          <!-- Timeline marker -->
          <div class="absolute w-5 h-5 bg-primary rounded-full -left-[42px] top-1"></div>
          
          <!-- Content -->
          <div>
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h2 class="text-2xl font-bold text-white">Full Stack Developer</h2>
              <div class="text-primary mt-1 md:mt-0">2018 - 2021</div>
            </div>
            <h3 class="text-xl font-medium text-gray-300 mb-4">Web Solutions Ltd.</h3>
            
            <div class="bg-gray-900/50 rounded-lg p-6 mb-6">
              <p class="text-gray-300 mb-4">
                Developed and maintained multiple client projects, ranging from e-commerce platforms 
                to content management systems, while focusing on responsive design and cross-browser compatibility.
              </p>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Responsibilities</h4>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built and maintained full-stack applications using Vue.js, Node.js, and MongoDB</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Designed and implemented RESTful APIs for client projects</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborated with designers to implement responsive, pixel-perfect UIs</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Managed deployment and maintenance of applications on cloud platforms</span>
                </li>
              </ul>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Successfully delivered 12+ client projects with 100% satisfaction rate</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Developed a custom e-commerce solution that increased client's online sales by 45%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Created a CI/CD pipeline that reduced deployment time by 70%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented responsive design strategies that increased mobile conversions by 35%</span>
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vue.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Express</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">REST APIs</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">AWS</span>
            </div>
          </div>
        </div>
        
        <!-- Experience Item 3 -->
        <div class="relative">
          <!-- Timeline marker -->
          <div class="absolute w-5 h-5 bg-primary rounded-full -left-[42px] top-1"></div>
          
          <!-- Content -->
          <div>
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h2 class="text-2xl font-bold text-white">Junior Web Developer</h2>
              <div class="text-primary mt-1 md:mt-0">2016 - 2018</div>
            </div>
            <h3 class="text-xl font-medium text-gray-300 mb-4">Digital Creations Agency</h3>
            
            <div class="bg-gray-900/50 rounded-lg p-6 mb-6">
              <p class="text-gray-300 mb-4">
                Started my professional journey as part of a creative agency, working on various 
                client websites and digital marketing campaigns.
              </p>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Responsibilities</h4>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Developed responsive websites using HTML, CSS, JavaScript, and jQuery</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented design mockups from Photoshop and Sketch files</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Managed WordPress websites and custom theme development</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Assisted with SEO optimization and analytics implementation</span>
                </li>
              </ul>
              
              <h4 class="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Created a custom WordPress theme that became the agency's best-selling product</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built an interactive landing page that achieved a 28% conversion rate</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented responsive design best practices that became agency standards</span>
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">HTML5</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">CSS3</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">JavaScript</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">jQuery</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">WordPress</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-8">Education</h2>
      <div class="bg-gray-900/50 rounded-lg p-6">
        <div class="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 class="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
            <p class="text-gray-300">University of Technology</p>
          </div>
          <div class="text-primary mt-2 md:mt-0">2012 - 2016</div>
        </div>
        <p class="text-gray-400">
          Specialized in web development and user interface design. Graduated with honors.
          Relevant coursework included algorithms, data structures, database systems, 
          human-computer interaction, and web application development.
        </p>
      </div>
    </div>

    <!-- Certifications Section -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-8">Certifications</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between mb-2">
            <h3 class="text-lg font-semibold text-white">AWS Certified Developer - Associate</h3>
            <span class="text-primary">2022</span>
          </div>
          <p class="text-gray-400">Amazon Web Services</p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between mb-2">
            <h3 class="text-lg font-semibold text-white">Professional Scrum Master I</h3>
            <span class="text-primary">2021</span>
          </div>
          <p class="text-gray-400">Scrum.org</p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between mb-2">
            <h3 class="text-lg font-semibold text-white">MongoDB Certified Developer</h3>
            <span class="text-primary">2020</span>
          </div>
          <p class="text-gray-400">MongoDB University</p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between mb-2">
            <h3 class="text-lg font-semibold text-white">React.js Certification</h3>
            <span class="text-primary">2019</span>
          </div>
          <p class="text-gray-400">Frontend Masters</p>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Want to work together?</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm currently open to new opportunities and would love to discuss how my experience
          can help your team or project succeed.
        </p>
        <NuxtLink to="/contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
          Get In Touch
        </NuxtLink>
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
  title: 'Experience | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my professional experience as a web developer, including my work history, responsibilities, and key achievements.' }
  ]
})
</script> 