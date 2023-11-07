
import './App.css';
import router from './router';

import React, { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;