import React, { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';

export const ThemeProvider = ({ children }) => {

  const getInitialState = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : true;
  };

  const [theme, setTheme] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
