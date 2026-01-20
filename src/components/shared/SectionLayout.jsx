import { useTheme } from '@core/ThemeProvider';
import { useTranslation } from '@core/lang/LanguageContext';

const SectionLayout = ({ children, sectionHeader }) => {
  const { mode } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`max-w-7xl mx-auto py-12 px-6 ${mode === 'game' ? 'tracking-widest' : 'tracking-normal'}`}>
      <h2 className={`text-3xl mb-12 font-bold ${
        mode === 'game' ? 'font-display italic text-cyan-400 uppercase' : 'font-sans text-slate-900'
      }`}>
        {t(`sectionHeaders.${sectionHeader}`)}
      </h2>
      {children}
    </div>
  );
};

export default SectionLayout;