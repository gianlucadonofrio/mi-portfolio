import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../portfolio/context/LanguageContext'

export const useLanguage = () => {
  const [languageIcon, setLanguageIcon] = useState('πΊπΈ')
  const { setLanguagePage, en, es } = useContext(LanguageContext)

  const handleLanguage = () => {
    if (document.documentElement.lang === 'es') {
      setLanguageIcon('πΊπΈ')
      setLanguagePage(en)
      document.documentElement.lang = 'en'
      localStorage.setItem('language', 'en')
    } else {
      setLanguageIcon('πͺπΈ')
      setLanguagePage(es)
      document.documentElement.lang = 'es'
      localStorage.setItem('language', 'es')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('language') === 'es') {
      setLanguageIcon('πͺπΈ')
      setLanguagePage(es)
      document.documentElement.lang = 'es'
    } else {
      setLanguageIcon('πΊπΈ')
      setLanguagePage(en)
      document.documentElement.lang = 'en'
    }
  }, [en, es, setLanguagePage])

  return [languageIcon, handleLanguage]
}
