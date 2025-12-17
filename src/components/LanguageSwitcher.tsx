'use client'

import { motion } from 'motion/react'
import { Languages } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
      aria-label="Change language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </motion.button>
  )
}
