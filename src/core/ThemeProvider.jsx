import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage or default to 'software'
  const [mode, setMode] = useState(localStorage.getItem('app-mode') || 'software');


  const toggleMode = () => {
    const newMode = mode === 'software' ? 'game' : 'software';
    setMode(newMode);
    localStorage.setItem('app-mode', newMode);
  };

  useEffect(() => {
    // Apply a class to the body to trigger Tailwind's 'game:' or 'soft:' variants
    const root = window.document.documentElement;
    root.classList.remove('software-mode', 'game-mode');
    root.classList.add(`${mode}-mode`);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);