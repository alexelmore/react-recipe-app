import { createContext } from "react";

// Init and export a const containing our context for ThemeContext
export const ThemeContext = createContext();

// Export a function, which returns a JSX template, which is wrapped inside our ThemeContext.Provider property. This function will take in a prop and pull out the children property of the prop using object destructuring. The ThemeContext.Provider component, wrapping the children prop, will also have a value property, containing a color property.

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "orange" }}>
      {children}
    </ThemeContext.Provider>
  );
}
