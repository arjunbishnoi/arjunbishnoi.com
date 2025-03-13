<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Contact
          <span class="block text-xl text-primary mt-2">Get in touch with me</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out through any of the methods below.
        </p>
      </div>
    </div>

    <!-- Contact Grid -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-6">Send a Message</h2>
          
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
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="What's this regarding?"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="6" 
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
        
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-6">Contact Information</h2>
          
          <!-- Contact Cards -->
          <div class="space-y-6">
            <!-- Email -->
            <div class="bg-gray-900/50 rounded-lg p-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-white">Email</h3>
                  <p class="text-gray-300 mt-1">For general inquiries and project discussions</p>
                  <a href="mailto:contact@arjunbishnoi.com" class="text-primary hover:text-primary/80 mt-2 inline-block">contact@arjunbishnoi.com</a>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="bg-gray-900/50 rounded-lg p-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-white">Connect on Social Media</h3>
                  <p class="text-gray-300 mt-1">Follow me for updates on my latest projects and tech insights</p>
                  <div class="flex space-x-4 mt-3">
                    <a href="#" class="text-primary hover:text-primary/80 inline-block">
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" class="text-primary hover:text-primary/80 inline-block">
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" class="text-primary hover:text-primary/80 inline-block">
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Location -->
            <div class="bg-gray-900/50 rounded-lg p-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-white">Location</h3>
                  <p class="text-gray-300 mt-1">Based in San Francisco, California</p>
                  <p class="text-gray-400 mt-2">Available for remote work worldwide and on-site opportunities in the SF Bay Area</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Response Time -->
          <div class="mt-8 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
            <p class="text-gray-300 text-sm">
              <span class="text-primary font-semibold">Note:</span> I typically respond to all inquiries within 24-48 hours.
              For urgent matters, please indicate this in your message subject.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- FAQ Section -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 mt-8">
      <h2 class="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        <div class="bg-gray-900/50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-3">What types of projects do you work on?</h3>
          <p class="text-gray-300">
            I specialize in full-stack web applications, responsive websites, and interactive user interfaces. 
            My expertise ranges from e-commerce platforms and content management systems to productivity tools 
            and custom web applications.
          </p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-3">Are you available for freelance work?</h3>
          <p class="text-gray-300">
            Yes, I'm selectively available for freelance projects, particularly those that involve interesting 
            challenges or opportunities to work with modern technologies. Feel free to reach out with your project details.
          </p>
        </div>
        
        <div class="bg-gray-900/50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-3">Do you offer consultation services?</h3>
          <p class="text-gray-300">
            Yes, I provide consultation on technical architecture, UI/UX design, and technology selection. 
            Whether you're starting a new project or looking to improve an existing one, I can offer guidance 
            tailored to your specific needs.
          </p>
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
  title: 'Contact | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Get in touch with Arjun Bishnoi for collaboration, job opportunities, or to discuss your project ideas.' }
  ]
})
</script> 