import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleContainer } from './Toggle.style.js';
import { ReactComponent as MoonIcon } from '../../images/icons/moon-white.svg';
import { ReactComponent as SunnyIcon } from '../../images/icons/sun-dark.svg';

import { setThemeHandler, setNameTheme } from '../../redux/theme/themeOperations';
import { getNameTheme } from '../../redux/theme/themeSelectors';

const Toggle = () => {
  // const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();
  const nameTheme = useSelector(getNameTheme);
  console.log('nameTheme', nameTheme);

  useEffect(() => {
    dispatch(setThemeHandler(nameTheme));
  }, [nameTheme]);

  const changeTheme = () => {
    dispatch(setNameTheme(nameTheme === 'light' ? 'dark' : 'light'));
    // const nameTheme = theme ? 'light' : 'dark';
    dispatch(setThemeHandler(nameTheme));
  };

  return (
    <ToggleContainer lightTheme={nameTheme === 'light'} onClick={changeTheme}>
      <SunnyIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
