import { createContext, useState, useEffect, ReactNode } from 'react'
import type { Language, LanguageContextType } from '../types/i18n'
import {
  getTranslations,
  getNestedValue,
  detectBrowserLanguage,
  getStoredLanguage,
  setStoredLanguage
} from '../i18n'

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first, then browser language, fallback to English
    return getStoredLanguage() || detectBrowserLanguage()
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setStoredLanguage(lang)
  }

  const t = (key: string): string => {
    const translations = getTranslations(language)
    return getNestedValue(translations, key)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
