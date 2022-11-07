import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../portfolio/context/LanguageContext';

export const useLanguage = () => {
  const [languageIcon, setLanguageIcon] = useState('🇺🇸');
  const { setLanguagePage, en, es } = useContext(LanguageContext);

  const handleLanguage = () => {
    if (document.documentElement.lang === 'es') {
      setLanguageIcon('🇺🇸');
      setLanguagePage(en);
      document.documentElement.lang = 'en';
      localStorage.setItem('language', 'en');
    } else {
      setLanguageIcon('🇪🇸');
      setLanguagePage(es);
      document.documentElement.lang = 'es';
      localStorage.setItem('language', 'es');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('language') === 'es') {
      setLanguageIcon('🇪🇸');
      setLanguagePage(es);
      document.documentElement.lang = 'es';
    } else {
      setLanguageIcon('🇺🇸');
      setLanguagePage(en);
      document.documentElement.lang = 'en';
    }
  }, [en, es, setLanguagePage]);

  return [languageIcon, handleLanguage];
};
