import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToggleContainer } from './Toggle.style.js';
import { ReactComponent as MoonIcon } from '../../images/icons/moon-white.svg';
import { ReactComponent as SunnyIcon } from '../../images/icons/sun-dark.svg';

import { setThemeHandler } from '../../redux/theme/themeOperations';

const Toggle = () => {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setThemeHandler('light'));
  // }, []);

  const changeTheme = () => {
    setTheme(!theme);
    const nameTheme = theme ? 'light' : 'dark';
    dispatch(setThemeHandler(nameTheme));
  };

  return (
    <ToggleContainer lightTheme={theme} onClick={changeTheme}>
      <SunnyIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
