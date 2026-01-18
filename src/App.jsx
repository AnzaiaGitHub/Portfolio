import React from 'react';
import { ThemeProvider } from './core/ThemeProvider';
import { useMediaQuery } from './hooks/useMediaQuery';
import Hero from './features/hero/Hero';
import ProjectGrid from './features/projects/ProjectGrid';
import Skills from './features/Skills/Skills';
import Contact from './features/contact/Contact';
import CustomCursor from './components/shared/CustomCursor';
import SectionLayout from './components/shared/SectionLayout';
import Navbar from './components/Navbar';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <ThemeProvider>
      {/* Custom Cursor is a great 'Multimedia Engineer' touch */}
      {!isMobile && <CustomCursor />}
      
      <div className="min-h-screen transition-colors duration-500">
        <Navbar />
        <Hero />
        
        <main>
          <SectionLayout title="Projects"><ProjectGrid /></SectionLayout>
          <SectionLayout title="Skills"><Skills /></SectionLayout>
          <SectionLayout title="Contact"><Contact /></SectionLayout>
        </main>

        <footer className="py-10 text-center opacity-50">
          <p>© {new Date().getFullYear()} - Designed & Built by Julian Pedroza Garcia</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;