import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../portfolio/context/LanguageContext';

export const useLanguage = () => {
  const [languageIcon, setLanguageIcon] = useState('🇺🇸');
  const { setLanguagePage, us, es } = useContext(LanguageContext);

  const handleLanguage = () => {
    if (document.documentElement.lang === 'es') {
      setLanguageIcon('🇺🇸');
      setLanguagePage(us);
      document.documentElement.lang = 'us';
      localStorage.setItem('language', 'us');
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
      setLanguagePage(us);
      document.documentElement.lang = 'us';
    }
  }, [us, es, setLanguagePage]);

  return [languageIcon, handleLanguage];
};
