'use client';

import React from "react";
import { Button } from "./ui/button";
import { useThemeColor, themes } from "@/contexts/theme-context";

const GradientCircle = () => {
  const { currentTheme } = useThemeColor();
  
  const themeColor = themes[currentTheme].primary;

  return (
    <Button
      className="relative h-4 w-4 overflow-hidden rounded-full p-0"
      variant="ghost"
      style={{
        background: `radial-gradient(circle at center, ${themeColor}cc 0%, ${themeColor}1a 70%, transparent 100%)`,
      }}
    >
      <div 
        className="absolute h-[5px] w-[5px] rounded-full" 
        style={{
          backgroundColor: themeColor
        }}
      />
    </Button>
  );
};

export default GradientCircle;