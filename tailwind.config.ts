import type { Config } from 'tailwindcss'

export default {
  content: [
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        'purple-heart': {
          '50': '#fbf3ff',
          '100': '#f5e4ff',
          '200': '#ecceff',
          '300': '#dea7ff',
          '400': '#ca70ff',
          '500': '#b73aff',
          '600': '#a614ff',
          '700': '#9005eb',
          '800': '#850bd0',
          '900': '#640a99',
          '950': '#450074',
        },

      }
    },
  },
  plugins: [],
} satisfies Config

