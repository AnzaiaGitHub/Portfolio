import { createContext, useContext } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Use the hook we created earlier to persist language choice
  const [lang, setLang] = useLocalStorage('app-lang', 'en');

  const t = (path) => {
    // Helper to get nested strings like t('hero.title')
    return path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);