// src/components/shared/SectionLayout.jsx
import { useTheme } from '../../core/ThemeProvider';

const SectionLayout = ({ children, title }) => {
  const { mode } = useTheme();

  return (
    <div className={`max-w-7xl mx-auto py-12 px-6 ${mode === 'game' ? 'tracking-widest' : 'tracking-normal'}`}>
      <h2 className={`text-3xl mb-12 font-bold ${
        mode === 'game' ? 'font-display italic text-cyan-400 uppercase' : 'font-sans text-slate-900'
      }`}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionLayout;