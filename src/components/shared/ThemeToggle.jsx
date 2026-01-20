import { useTheme } from '@core/ThemeProvider';
import { useTranslation } from '@core/lang/LanguageContext';

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { mode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
        mode === 'game'
          ? 'bg-cyan-500 text-black hover:bg-cyan-400'
          : 'bg-slate-800 text-white hover:bg-slate-700'
      }`}
    >
      {mode === 'game' ? t('hero.game.seePortfolio') : t('hero.software.seePortfolio')}
    </button>
  );
};

export default ThemeToggle;