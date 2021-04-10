import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToggleContainer } from './Toggle.style.js';
import { ReactComponent as MoonIcon } from '../../images/icons/moon.svg';
import { ReactComponent as SunnyIcon } from '../../images/icons/sunny.svg';

import { setThemeHandler } from '../../redux/theme/themeOperations';

const Toggle = () => {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();

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

// Toggle.propTypes = {
//   theme: PropTypes.string.isRequired,
//   toggleTheme: PropTypes.func.isRequired,
// };

export default Toggle;
