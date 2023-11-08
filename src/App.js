
import './App.css';
import router from './router';

import React, { createContext, useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

export const ThemeContext = createContext(null);



function App() {

  const [theme, setTheme] = useState("dark");

  const updateThemeVariables = (theme) => {
    const root = document.documentElement;
    if (theme === "light") {
      root.style.setProperty("--background", "#cad2c5");
      root.style.setProperty("--color", "#39395f");
      root.style.setProperty("--second-color", "#531d05");
    } else {
      root.style.setProperty("--background", "#2a1b3d");
      root.style.setProperty("--color", "#a4b3b6");
      root.style.setProperty("--second-color", "#a9c25de1");
    };
};

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    updateThemeVariables(theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;