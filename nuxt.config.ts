import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/global.css"],
    modules: ['@pinia/nuxt', 'nuxt-windicss', '@nuxtjs/google-fonts'],
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
    googleFonts: {
        families: {
            Roboto: true,
            Mulish: true
        }
    }
})
