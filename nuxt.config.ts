export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/',
    buildAssetsDir: '/todo-app/_nuxt/',
  },
  nitro: {
    preset: 'static',
  },
})
