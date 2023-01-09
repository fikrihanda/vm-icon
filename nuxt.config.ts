// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/app.scss',
  ],
  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
        ],
      },
    ],
    'nuxt-lodash',
    'bootstrap-vue-3/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        download: false,
        families: {
          'DM Sans': {
            wght: [400, 500, 700],
            ital: [400, 500, 700],
          },
        },
      },
    ],
  ],
})
