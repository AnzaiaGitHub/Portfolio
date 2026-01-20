import { useTheme } from '@core/ThemeProvider';
import { useTranslation } from '@core/lang/LanguageContext';

const SectionLayout = ({ children, sectionHeader }) => {
  const { mode } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`max-w-7xl mx-auto py-8 px-8 ${mode === 'game' ? 'tracking-widest' : 'tracking-normal'}`}>
      <h2 className={`text-2xl md:text-4xl mb-8 md:mb-12 font-bold ${
        mode === 'game' ? 'font-display italic text-cyan-400 uppercase' : 'font-sans text-slate-900'
      }`}>
        {t(`sectionHeaders.${sectionHeader}`)}
      </h2>
      {children}
      <div className={`border-b mt-8 ${mode === 'game' ? 'border-cyan-400' : 'border-slate-400'}`}></div>
    </div>
  );
};

export default SectionLayout;