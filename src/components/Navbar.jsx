import ThemeToggle from './shared/ThemeToggle';
import LanguagePicker from './shared/LanguagePicker';
import { useTranslation } from '../core/lang/LanguageContext';
import { useTheme } from '../core/ThemeProvider';

const Navbar = () => {
  const { t } = useTranslation();
  const { mode } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 py-4 flex flex-col gap-4 md:flex-row  justify-between items-center transition-colors ${
      mode === 'game'
        ? 'bg-black/80 backdrop-blur-md border-b border-cyan-900/50'
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-200'
    }`}>
      <div className="text-1xl md:text-xl font-black tracking-tighter w-full md:w-auto text-center md:text-left">
        {t('name')}
        <span className={mode === 'game' ? 'text-cyan-400' : 'text-blue-600'}>.</span>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto justify-center">
        <ThemeToggle />
        <LanguagePicker />
      </div>
    </nav>
  );
};

export default Navbar;