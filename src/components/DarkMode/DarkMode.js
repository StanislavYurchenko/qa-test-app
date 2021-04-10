import { useEffect, useState } from 'react';
// import { changeTheme } from '../../themes/colors';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
      // changeTheme('dark');
    } else {
      setMode('light');
      // changeTheme('light');
    }
  };

  // useEffect(() => {
  //   changeTheme(theme);
  // }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
