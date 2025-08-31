// composables/useColorMode.ts
import { ref, onMounted, watch } from 'vue'

export const useColorMode = () => {
  const isDark = ref(false)
  const mediaQuery = ref<MediaQueryList | null>(null)

  const setDarkMode = (value: boolean) => {
    isDark.value = value
    if (process.client) {
      document.documentElement.classList.toggle('dark', value)
      localStorage.setItem('darkMode', String(value))
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDark.value)
  }

  const initColorMode = () => {
    if (!process.client) return

    // 1. Check localStorage first
    const storedPreference = localStorage.getItem('darkMode')
    
    // 2. If no stored preference, use system preference
    if (storedPreference === null) {
      mediaQuery.value = window.matchMedia('(prefers-color-scheme: dark)')
      setDarkMode(mediaQuery.value.matches)
      
      // Listen for system preference changes (only when no localStorage preference)
      mediaQuery.value.addEventListener('change', (e) => {
        if (!localStorage.getItem('darkMode')) {
          setDarkMode(e.matches)
        }
      })
    } else {
      // 3. Use stored preference
      setDarkMode(storedPreference === 'true')
    }
  }

  // Cleanup media query listener
  const cleanup = () => {
    mediaQuery.value?.removeEventListener?.('change', () => {})
  }

  onMounted(() => {
    initColorMode()
    return cleanup
  })

  // Optional: Watch for changes if needed elsewhere
  watch(isDark, (newVal) => {
    // Handle any side effects
  })

  return {
    isDark,
    toggleDarkMode,
    setDarkMode
  }
}