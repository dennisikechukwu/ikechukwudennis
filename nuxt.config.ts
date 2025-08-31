


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxt/eslint', // Nuxt 4's official font module (replaces google-fonts)
  '@nuxt/fonts', '@nuxtjs/tailwindcss', 'nuxt-lucide-icons','@vueuse/motion/nuxt'],

  // Nuxt 4 Fonts Module Configuration
  fonts: {
    families: [
      { 
        name: 'Ovo',
        provider: 'google' // Automatically handles the CDN link
      }
    ]
  },

  // Tailwind Configuration
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            ovo: ['Ovo', 'serif'] // Now use 'font-ovo' class
          }
        }
      }
    }
  },

   typescript: {
    tsConfig: {
      include: ['types/**/*.d.ts']
    }
  }
})