// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
// @ts-ignore
import tailwind from 'eslint-plugin-tailwindcss'

export default withNuxt(
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        whitelist: ['bg-grid']
      }
    }
  }
)
