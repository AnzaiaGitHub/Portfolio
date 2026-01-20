import { useTranslation } from '../../core/lang/LanguageContext';
import { useTheme } from '../../core/ThemeProvider';
import { useState, useEffect } from 'react';

const LanguagePicker = () => {
  const { lang, setLang, t } = useTranslation();
  const [languages, setLanguages] = useState({en: 'English', es: 'Spanish'});
  const { mode } = useTheme();

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  useEffect(() => {
    setLanguages(t('languages'));
  }, []);

  return (
    <div className="relative">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={lang}
        className={`block appearance-none w-full border px-2 py-2 pr-6 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline text-xs md:text-sm font-medium cursor-pointer transition-colors
          ${mode === 'game'
            ? 'bg-cyan-500 text-black border-cyan-500 hover:bg-cyan-400'
            : 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700'
          }`}
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code} className="text-sm cursor-pointer">{name}</option>
        ))}
      </select>
      <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 
        ${mode === 'game' ? 'text-black' : 'text-white'}`}>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguagePicker;
