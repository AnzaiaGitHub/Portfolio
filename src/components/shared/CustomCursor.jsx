import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '../../core/ThemeProvider';

const CustomCursor = () => {
  const { mode } = useTheme();
  
  // Use MotionValues for high-performance updates (skips React render cycle)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Add "Spring" physics for that juicy, high-end feel
  const springConfig = { damping: 25, stiffness: 700 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] border-2 
        ${mode === 'game' 
          ? 'border-cyan-400 shadow-[0_0_15px_#22d3ee] bg-cyan-400/20' 
          : 'border-slate-900 bg-transparent'
        }`}
    >
      {/* Visual Reticle for Game Mode */}
      {mode === 'game' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[2px] h-full bg-cyan-400/50 absolute rotate-90" />
          <div className="w-[2px] h-full bg-cyan-400/50 absolute" />
        </div>
      )}
    </motion.div>
  );
};

export default CustomCursor;