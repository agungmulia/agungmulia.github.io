import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

// The FOUC-prevention script in index.html already set this before Vue mounted.
const theme = ref(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  localStorage.setItem(STORAGE_KEY, value)
})

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
