<template>
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
</template>
