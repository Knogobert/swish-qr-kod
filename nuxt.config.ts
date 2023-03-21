import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  typescript: {
    shim: false
  },
  css: [ '@/assets/main.scss' ],
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      googleFonts: {
        families: {
          Manrope: [400, 600],
        }
      }
    }]
  ],
})
