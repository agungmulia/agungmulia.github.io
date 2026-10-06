import { createI18n } from 'vue-i18n'
import en from './locales/en'
import id from './locales/id'

export const LOCALES = ['en', 'id']
const STORAGE_KEY = 'locale'

function initialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (LOCALES.includes(saved)) return saved
  return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale(),
  fallbackLocale: 'en',
  messages: { en, id },
})
