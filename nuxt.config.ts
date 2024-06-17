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

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  devtools: { enabled: true },
})