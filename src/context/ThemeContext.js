import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "#270082" }}>
      {children}
    </ThemeContext.Provider>
  );
}
