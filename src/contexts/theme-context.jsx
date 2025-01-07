"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export const themes = {
  first: {
    primary: "#1E234E",
    secondary: "#463C8D",
    accentBlue: "#2B3DDF",
    accentPurpleLight: "#8B7FD7",
    accentPink: "#FF84E8",
    primaryText: "#1E234E",
    secondaryText: "#4A4F6C",
    mutedText: "#6F7399",
    inverseText: "#FFFFFF",
    gradientPinkStart: "#FFE5F6",
    gradientPinkMid: "#FFE0F5",
    gradientPurpleEnd: "#F1E3FF",
    gradientPrimary: "linear-gradient(135deg, var(--gradient-pink-start) 0%, var(--gradient-pink-mid) 50%, var(--gradient-purple-end) 100%)",
    gradientCTA: "linear-gradient(90deg, var(--accent-blue) 0%, var(--primary-purple) 100%)",
  },
};

const ThemeContext = createContext();

export function ThemeColorProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("first");

  useEffect(() => {
    // Apply theme colors to CSS variables
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty("--theme-primary", theme.primary);
    document.documentElement.style.setProperty("--theme-secondary", theme.secondary);
    document.documentElement.style.setProperty("--theme-accent-blue", theme.accentBlue);
    document.documentElement.style.setProperty("--theme-accent-purple-light", theme.accentPurpleLight);
    document.documentElement.style.setProperty("--theme-accent-pink", theme.accentPink);
    document.documentElement.style.setProperty("--theme-primary-text", theme.primaryText);
    document.documentElement.style.setProperty("--theme-secondary-text", theme.secondaryText);
    document.documentElement.style.setProperty("--theme-muted-text", theme.mutedText);
    document.documentElement.style.setProperty("--theme-inverse-text", theme.inverseText);
    document.documentElement.style.setProperty("--theme-gradient-pink-start", theme.gradientPinkStart);
    document.documentElement.style.setProperty("--theme-gradient-pink-mid", theme.gradientPinkMid);
    document.documentElement.style.setProperty("--theme-gradient-purple-end", theme.gradientPurpleEnd);
    document.documentElement.style.setProperty("--theme-gradient-primary", theme.gradientPrimary);
    document.documentElement.style.setProperty("--theme-gradient-cta", theme.gradientCTA);
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
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
};
