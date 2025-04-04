"use client";

import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-5 h-5" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Image 
          src="/icons/moon.svg"
          alt="Switch to dark mode"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ) : (
        // Sun icon for dark mode (to switch to light)
        <Image 
          src="/icons/sun.svg"
          alt="Switch to light mode"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      )}
    </button>
  );
}