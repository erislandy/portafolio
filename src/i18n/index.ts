import type { Language, Translations } from '../types/i18n'
import enTranslations from './translations/en.json'
import esTranslations from './translations/es.json'

const translations: Record<Language, Translations> = {
  en: enTranslations as Translations,
  es: esTranslations as Translations
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}

export function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.')
  let current = obj

  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation key not found: ${path}`)
      return path
    }
    current = current[key]
  }

  return current
}

export function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'es' ? 'es' : 'en'
}

export function getStoredLanguage(): Language | null {
  const stored = localStorage.getItem('language')
  if (stored === 'en' || stored === 'es') {
    return stored
  }
  return null
}

export function setStoredLanguage(language: Language): void {
  localStorage.setItem('language', language)
}
