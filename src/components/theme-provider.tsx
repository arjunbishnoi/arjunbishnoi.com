"use client";

import * as React from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

type ThemeSetter = Theme | ((currentTheme: Theme) => Theme);

type ThemeContextValue = {
  resolvedTheme: Theme;
  setTheme: (value: ThemeSetter) => void;
  theme: Theme;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function readTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {}

  return document.documentElement.classList.contains("dark") ? "dark" : DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(DEFAULT_THEME);

  React.useEffect(() => {
    const nextTheme = readTheme();
    applyTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  React.useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      const nextTheme = event.newValue === "dark" ? "dark" : DEFAULT_THEME;
      applyTheme(nextTheme);
      setThemeState(nextTheme);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setTheme = React.useCallback((value: ThemeSetter) => {
    setThemeState((currentTheme) => {
      const nextTheme = typeof value === "function" ? value(currentTheme) : value;
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {}

      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme: theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
