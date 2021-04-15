import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleContainer } from './Toggle.style.js';
import { ReactComponent as MoonIcon } from '../../images/icons/moon-white.svg';
import { ReactComponent as SunnyIcon } from '../../images/icons/sun-dark.svg';

import { setThemeHandler, setNameTheme } from '../../redux/theme/themeOperations';
import { getNameTheme } from '../../redux/theme/themeSelectors';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

const Toggle = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const dispatch = useDispatch();
  const nameTheme = useSelector(getNameTheme);

  useEffect(() => {
    dispatch(setThemeHandler(nameTheme));
  }, [nameTheme]);

  const changeTheme = () => {
    dispatch(setNameTheme(nameTheme === 'light' ? 'dark' : 'light'));
    dispatch(setThemeHandler(nameTheme));
  };

  return (
    <ToggleContainer theme={customTheme} lightTheme={nameTheme === 'light'} onClick={changeTheme}>
      <SunnyIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
