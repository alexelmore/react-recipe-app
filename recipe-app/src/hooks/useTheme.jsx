import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  // Init our context, passing in our ThemeContext as an argument to the useContext Hook .
  const context = useContext(ThemeContext);

  // Check for context scope
  if (context === undefined) {
    throw new Error("useTheme Hook must be used within a ThemeProvider");
  }
  return context;
};
