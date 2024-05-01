// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.DEBUG == 'true' },
  build: {
    transpile: ['trpc-nuxt']
  },
  nitro: {
    routeRules: {
      '/xyuan/**': {
        proxy: process.env.XYUAN_URL,
        cors: true
      }
    }
  }
})
