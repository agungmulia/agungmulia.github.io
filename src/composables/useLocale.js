import { watchEffect } from 'vue'
import { i18n, LOCALES } from '../i18n'

const locale = i18n.global.locale

watchEffect(() => {
  document.documentElement.lang = locale.value
  localStorage.setItem('locale', locale.value)
})

export function useLocale() {
  function toggle() {
    locale.value = LOCALES[(LOCALES.indexOf(locale.value) + 1) % LOCALES.length]
  }

  return { locale, toggle }
}
