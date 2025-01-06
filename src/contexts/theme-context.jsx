'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = {
  blue: {
    primary: '#2B3DDF', // orange-500
    secondary: '#463C8D', // orange-400
    accent: '#a78bfa', // orange-700
  },
  violet: {
    primary: '#8b5cf6', // violet-500
    secondary: '#a78bfa', // violet-400
    accent: '#6d28d9', // violet-700
  },
  emerald: {
    primary: '#10b981', // emerald-500
    secondary: '#34d399', // emerald-400
    accent: '#047857', // emerald-700
  },
  rose: {
    primary: '#f43f5e', // rose-500
    secondary: '#fb7185', // rose-400
    accent: '#be123c', // rose-700
  },
};

const ThemeContext = createContext();

export function ThemeColorProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('blue');

  useEffect(() => {
    // Apply theme colors to CSS variables
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty(
      '--theme-primary',
      theme.primary
    );
    document.documentElement.style.setProperty(
      '--theme-secondary',
      theme.secondary
    );
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        changeTheme,
        availableThemes: Object.keys(themes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeColor = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeColor must be used within a ThemeColorProvider');
  }
  return context;
};
