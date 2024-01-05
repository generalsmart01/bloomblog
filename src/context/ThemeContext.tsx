"use client"

import { createContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

const getFromLocalStorage = (): Theme => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value as Theme || "light";
  }

  return "light";
};

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => getFromLocalStorage());

  const contextValue: ThemeContextState = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
};
