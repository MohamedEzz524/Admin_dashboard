import { useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersLightScheme = window.matchMedia(
      "(prefers-color-scheme:light)"
    ).matches;
    return savedTheme ? savedTheme : prefersLightScheme ? "light" : "dark";
  });

  // Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("1");
  };

  // Set Theme on Every Render
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
