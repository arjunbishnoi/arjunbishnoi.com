// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],
  site: {
    url: 'https://arjunbishnoi.com',
  },
  app: {
    head: {
      title: 'Arjun Bishnoi <Designer/Developer>',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack Developer and UI/UX Designer specializing in Vue.js, Node.js, and modern web technologies.' },
        { name: 'application-name', content: 'Arjun Bishnoi' },
        { name: 'apple-mobile-web-app-title', content: 'Arjun Bishnoi' },
        { property: 'og:site_name', content: 'Arjun Bishnoi' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Arjun Bishnoi',
            url: 'https://arjunbishnoi.com',
            alternateName: ['arjunbishnoi.com']
          })
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
  // ...
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    }
  },
  experimental: {
    payloadExtraction: false
  },
  compatibilityDate: '2025-03-12'
})
