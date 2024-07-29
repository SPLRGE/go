// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    "nuxt-auth-utils",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxt/fonts",
    "@nuxt/ui"
  ],

  hub: {
    database: true,
  },

  colorMode: {
    preference: 'dark'
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' }
    ]
  },

  runtimeConfig: {
    public: {
      hostname: 'https://splrge.link'
    }
  },

  routeRules: {
    '/': {
      redirect: '/admin/home' // Because of the server route [uid] (/server/routes/[uid].ts), pages at the root will be ignored, all the frontend is on /admin, a redirection is performed if the user arrives at the root.
    }
  },

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  devtools: { enabled: true },
})