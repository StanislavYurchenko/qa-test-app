import PropTypes from 'prop-types';
import { ToggleContainer } from './Toggle.style.js';
import { ReactComponent as MoonIcon } from '../../images/icons/moon.svg';
import { ReactComponent as SunnyIcon } from '../../images/icons/sunny.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunnyIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Toggle;
