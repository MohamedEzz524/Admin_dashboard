import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a Theme Provider");
  }
  return themeContext;
};

export default useTheme;
