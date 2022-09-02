import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                blue: colors.sky,
                red: colors.rose,
                pink: colors.fuchsia,
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [
        require('windicss/plugin/filters'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/line-clamp'),
        require('windicss/plugin/typography')({
            modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
        }),
    ],
    preflight: false,
    extract: {
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    }
})