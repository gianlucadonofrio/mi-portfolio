import React from 'react';
import { LanguageContext } from './LanguageContext';
import * as es from '../languages/es.json';
import * as en from '../languages/us.json';

export const LanguageProvider = ({ children }) => {
  const [languagePage, setLanguagePage] = React.useState(es);

  return (
    <LanguageContext.Provider value={{ languagePage, setLanguagePage, es, en }}>
      {children}
    </LanguageContext.Provider>
  );
};
