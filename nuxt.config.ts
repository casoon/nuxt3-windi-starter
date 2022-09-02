import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    head: {
        title: 'favorite-airports',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    css: ["~/assets/css/global.css"],
    modules: ['@pinia/nuxt', 'nuxt-windicss', '@nuxtjs/google-fonts', '@nuxt/image-edge'],
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
    image: {
    },
    googleFonts: {
        families: {
            Roboto: true,
            Mulish: true
        }
    }
})
