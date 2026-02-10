// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'Arjun Bishnoi <Designer/Developer>',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Full Stack Developer and UI/UX Designer specializing in Vue.js, Node.js, and modern web technologies.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    },
    baseURL: '/',
  },
  typescript: {
    strict: true
  },
  ssr: true,
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    }
  },
  experimental: {
    payloadExtraction: false
  },
  compatibilityDate: '2025-03-12'
})
