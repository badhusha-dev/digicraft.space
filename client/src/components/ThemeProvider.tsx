import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";

type Theme = "light" | "dark";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// DigiCraft Brand Colors - Based on logo design
export const DIGICRAFT_COLORS = {
  // Primary colors from logo background and elements
  primary: "#3B0A45",        // Deep purple background
  primaryLight: "#4A0F56",  // Lighter purple
  primaryDark: "#2A072F",    // Darker purple
  
  // Logo element colors
  logo: {
    white: "#FFFFFF",       // White element
    yellow: "#F59E0B",      // Yellow/gold element  
    purple: "#8B5CF6",      // Purple element
    magenta: "#EC4899"      // Magenta/pink element
  },
  
  // Extended palette for UI
  secondary: "#EC4899",     // Magenta from logo
  accent: "#F59E0B",        // Yellow from logo
  info: "#8B5CF6",          // Purple from logo
  
  // Neutral colors
  white: "#FFFFFF",
  lightGray: "#F8F9FA",
  gray: "#6C757D",
  darkGray: "#343A40",
  black: "#000000",
  
  // Gradients
  gradients: {
    primary: "linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%)",
    logo: "linear-gradient(135deg, #FFFFFF 0%, #F59E0B 25%, #8B5CF6 50%, #EC4899 100%)",
    button: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)",
    accent: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)"
  }
} as const;

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage during component creation
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme") as Theme;
      return savedTheme || "light";
    }
    return "light";
  });

  // Memoize the setTheme function to prevent unnecessary re-renders
  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    theme,
    setTheme: handleSetTheme,
  }), [theme, handleSetTheme]);

  useEffect(() => {
    // Apply theme to document and localStorage
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
