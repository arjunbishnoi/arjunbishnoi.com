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
          A timeline of my career showcasing my roles, responsibilities, and achievements 
          across various positions in the tech industry.
        </p>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div class="relative border-l border-gray-800 pl-8 ml-4">
        <!-- Current Position -->
        <div class="mb-16 relative">
          <!-- Timeline node -->
          <div class="absolute w-4 h-4 bg-primary rounded-full -left-[2.25rem] top-1"></div>
          
          <!-- Year label -->
          <div class="absolute -left-28 top-0 hidden md:block">
            <span class="text-primary font-semibold">2021 - Present</span>
          </div>
          
          <!-- Content -->
          <div>
            <h2 class="text-2xl font-bold text-white">Senior Frontend Developer</h2>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-4 text-gray-400">
              <span class="text-primary font-medium">TechCorp Inc.</span>
              <span class="hidden sm:inline text-gray-600">•</span>
              <span class="md:hidden">2021 - Present</span>
              <span class="text-gray-400">San Francisco, CA</span>
            </div>
            
            <p class="text-gray-300 mb-6">
              Led the development of the company's flagship SaaS product, implementing 
              modern frontend architecture with React and TypeScript. Collaborated with UX designers 
              to create an intuitive and responsive interface that improved user retention by 35%.
            </p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Key Responsibilities</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Architected and implemented a new component system using React and TypeScript</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Led a team of 4 frontend developers, conducting code reviews and mentoring junior developers</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborated with design team to implement a comprehensive design system</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Optimized application performance, reducing initial load time by 40%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented CI/CD pipelines using GitHub Actions, ensuring code quality and automated deployments</span>
                </li>
              </ul>
              
              <h3 class="text-lg font-semibold text-white mt-6">Key Achievements</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Reduced bundle size by 30% through code splitting and lazy loading strategies</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented accessibility improvements that increased WCAG compliance from 65% to 98%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Developed a reusable component library that accelerated development speed by 25%</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">TypeScript</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Redux</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">GraphQL</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Jest</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">CI/CD</span>
            </div>
          </div>
        </div>
        
        <!-- Previous Position -->
        <div class="mb-16 relative">
          <!-- Timeline node -->
          <div class="absolute w-4 h-4 bg-primary rounded-full -left-[2.25rem] top-1"></div>
          
          <!-- Year label -->
          <div class="absolute -left-28 top-0 hidden md:block">
            <span class="text-primary font-semibold">2018 - 2021</span>
          </div>
          
          <!-- Content -->
          <div>
            <h2 class="text-2xl font-bold text-white">Full Stack Developer</h2>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-4 text-gray-400">
              <span class="text-primary font-medium">Web Solutions Ltd.</span>
              <span class="hidden sm:inline text-gray-600">•</span>
              <span class="md:hidden">2018 - 2021</span>
              <span class="text-gray-400">Austin, TX</span>
            </div>
            
            <p class="text-gray-300 mb-6">
              Developed and maintained multiple client websites and web applications, focusing on responsive design 
              and cross-browser compatibility. Built RESTful APIs and integrated third-party services for various projects.
            </p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Key Responsibilities</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built RESTful APIs using Node.js and Express for various client projects</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Designed and implemented responsive frontend interfaces using React and Vue.js</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Created and optimized database schemas for MongoDB and PostgreSQL</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented authentication and authorization systems using JWT and OAuth</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Participated in client meetings and assisted in gathering requirements</span>
                </li>
              </ul>
              
              <h3 class="text-lg font-semibold text-white mt-6">Key Achievements</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Delivered 12+ successful projects, each meeting or exceeding client expectations</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented a CI/CD pipeline that reduced deployment time by 70%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Created a custom CMS solution that was adopted for multiple client projects</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vue.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Express</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">PostgreSQL</span>
            </div>
          </div>
        </div>
        
        <!-- Earlier Position -->
        <div class="mb-16 relative">
          <!-- Timeline node -->
          <div class="absolute w-4 h-4 bg-primary rounded-full -left-[2.25rem] top-1"></div>
          
          <!-- Year label -->
          <div class="absolute -left-28 top-0 hidden md:block">
            <span class="text-primary font-semibold">2016 - 2018</span>
          </div>
          
          <!-- Content -->
          <div>
            <h2 class="text-2xl font-bold text-white">Frontend Developer</h2>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-4 text-gray-400">
              <span class="text-primary font-medium">Digital Innovators</span>
              <span class="hidden sm:inline text-gray-600">•</span>
              <span class="md:hidden">2016 - 2018</span>
              <span class="text-gray-400">Boston, MA</span>
            </div>
            
            <p class="text-gray-300 mb-6">
              Started as a junior developer and quickly progressed to taking on more responsibilities. 
              Focused on implementing responsive interfaces and optimizing website performance while adhering to design guidelines.
            </p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Key Responsibilities</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Developed responsive websites using HTML5, CSS3, and JavaScript</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented designs from Sketch and Figma files with pixel-perfect accuracy</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Optimized website performance through lazy loading and code optimization</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Created interactive UI components using jQuery and React</span>
                </li>
              </ul>
              
              <h3 class="text-lg font-semibold text-white mt-6">Key Achievements</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Promoted from Junior to Frontend Developer within 10 months</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented a mobile-first approach that improved mobile conversion rates by 25%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Received client commendation for exceptional attention to detail</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">HTML5</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">CSS3</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">JavaScript</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">jQuery</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Responsive Design</span>
            </div>
          </div>
        </div>
        
        <!-- Education -->
        <div class="relative">
          <!-- Timeline node -->
          <div class="absolute w-4 h-4 bg-primary rounded-full -left-[2.25rem] top-1"></div>
          
          <!-- Year label -->
          <div class="absolute -left-28 top-0 hidden md:block">
            <span class="text-primary font-semibold">2012 - 2016</span>
          </div>
          
          <!-- Content -->
          <div>
            <h2 class="text-2xl font-bold text-white">Education</h2>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-4 text-gray-400">
              <span class="text-primary font-medium">Boston University</span>
              <span class="hidden sm:inline text-gray-600">•</span>
              <span class="md:hidden">2012 - 2016</span>
              <span class="text-gray-400">Boston, MA</span>
            </div>
            
            <p class="text-gray-300 mb-4">
              <strong>Bachelor of Science in Computer Science</strong>
            </p>
            
            <p class="text-gray-300 mb-6">
              Focus on software engineering and web technologies. Completed a senior project developing a collaborative note-taking application using the MERN stack.
            </p>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Relevant Coursework</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Data Structures and Algorithms</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Web Application Development</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Database Systems</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>User Interface Design</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Computer Science</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Web Development</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">UI/UX Design</span>
              <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Software Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certifications -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-8">Certifications & Training</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-white">AWS Certified Developer - Associate</h3>
              <p class="text-gray-400 mt-1">Amazon Web Services</p>
            </div>
            <span class="text-primary text-sm">2022</span>
          </div>
          <p class="text-gray-300 mt-4">
            Validation of understanding of core AWS services, uses, and basic AWS architecture best practices, 
            as well as proficiency in developing, deploying, and debugging cloud-based applications.
          </p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-white">Professional Scrum Master I (PSM I)</h3>
              <p class="text-gray-400 mt-1">Scrum.org</p>
            </div>
            <span class="text-primary text-sm">2020</span>
          </div>
          <p class="text-gray-300 mt-4">
            Certification demonstrating fundamental knowledge of Scrum and its application in real-world scenarios. 
            Focus on the Scrum framework, roles, events, and artifacts.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Interested in my background?</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          Download my resume for a comprehensive overview of my experience, or reach out if you'd like to discuss potential opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/resume.pdf" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors" download>
            Download Resume
          </a>
          <NuxtLink to="/contact" class="px-6 py-3 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 rounded-md inline-block transition-colors">
            Contact Me
          </NuxtLink>
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
  title: 'Experience | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my professional experience, career journey, and achievements in web development and design.' }
  ]
})
</script> 