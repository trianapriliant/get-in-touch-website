'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Use system preference if no saved preference
      setTheme(systemPrefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.button
        onClick={toggleTheme}
        className="relative rounded-full w-12 h-6 bg-foreground/20 flex items-center p-1 cursor-pointer transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <motion.div
          className="absolute w-4 h-4 bg-background rounded-full shadow-md flex items-center justify-center"
          animate={{ 
            x: theme === 'dark' ? 24 : 0,
            backgroundColor: theme === 'dark' ? 'var(--color-accent)' : 'var(--color-accent)'
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {theme === 'dark' ? (
            <FiMoon className="text-foreground text-xs" />
          ) : (
            <FiSun className="text-foreground text-xs" />
          )}
        </motion.div>
        
        <div className="flex justify-between w-full px-1">
          <FiSun className="text-yellow-500 text-sm" />
          <FiMoon className="text-foreground/60 text-sm" />
        </div>
      </motion.button>
  );
}