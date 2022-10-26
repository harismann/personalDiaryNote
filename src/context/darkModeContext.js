import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || true
  );

  const toggle = () => {
    // console.log('set success bor')
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // console.log('useEffect kepanggil darkmodecontext js')
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
