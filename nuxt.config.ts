import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/global.css"],
    modules: ['@pinia/nuxt', 'nuxt-windicss'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    autoprefixer: {},
                },
            },
        },
    },
    windicss: {
        analyze: true
    },
})
