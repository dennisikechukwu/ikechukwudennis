export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') document.documentElement.classList.add('dark')
  }
})
