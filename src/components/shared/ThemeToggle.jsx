import { useTheme } from '../../core/ThemeProvider';
const ThemeToggle = () => {
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
      {mode === 'game' ? 'See Software Portfolio' : 'Enjoy Game Porfolio'}
    </button>
  );
};

export default ThemeToggle;