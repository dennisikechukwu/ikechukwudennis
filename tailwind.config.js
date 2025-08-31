/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Essential for manual dark mode toggling
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          900: '#1E3A8A'
        },
        dark: {
          DEFAULT: '#1F2937',
          800: '#1E293B',
          900: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        ovo: ['"OVO"', 'serif']
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke'
      }
    },
  },
  plugins: [
  
   
  ],
}