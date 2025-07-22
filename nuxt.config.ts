export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  nitro: {
    preset: 'static',
  },
})
