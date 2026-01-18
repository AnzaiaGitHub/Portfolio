import ThemeToggle from './shared/ThemeToggle';
import { useTheme } from '../core/ThemeProvider';

const Navbar = () => {
  const { mode } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center transition-colors ${
      mode === 'game' ? 'bg-black/80 backdrop-blur-md border-b border-cyan-900/50' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="text-xl font-black tracking-tighter">
        Julian Pedroza Garcia<span className={mode === 'game' ? 'text-cyan-400' : 'text-blue-600'}>.</span>
      </div>
      
      <div className="flex items-center gap-8">
        <ul className="flex gap-6 text-sm font-medium uppercase tracking-widest">
          <li className="hover:opacity-50 cursor-pointer" href="#projects">Projects</li>
          <li className="hover:opacity-50 cursor-pointer" href="#skills">Skills</li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;