import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  buildModules: [
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
