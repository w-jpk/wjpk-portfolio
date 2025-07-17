// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  css: [
    '~/assets/css/main.css',
  ],
  
  app: {
    head: {
      title: 'W-JPK - Frontend Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Developer Portfolio - HTML, CSS, JavaScript, TypeScript, Vue.js, Nuxt.js' },
        { name: 'keywords', content: 'frontend, developer, vue, nuxt, typescript, javascript' },
        { property: 'og:title', content: 'W-JPK - Frontend Developer Portfolio' },
        { property: 'og:description', content: 'Frontend Developer Portfolio - HTML, CSS, JavaScript, TypeScript, Vue.js, Nuxt.js' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' },
      ],
    },
  },
})
