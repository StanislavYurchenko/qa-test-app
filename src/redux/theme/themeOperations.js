import themeActions from './themeAction';
import { colorsLight, colorsDark } from '../../themes/colors';

const setThemeHandler = nameTheme => dispatch => {
  switch (nameTheme) {
    case 'light':
      dispatch(themeActions.setThemeSuccess(colorsLight));
      break;

    case 'dark':
      dispatch(themeActions.setThemeSuccess(colorsDark));
      break;

    default:
      dispatch(themeActions.setThemeSuccess(colorsLight));
  }
};

const setNameTheme = nameTheme => dispatch => {
  dispatch(themeActions.setNameTheme(nameTheme));
};

export { setThemeHandler, setNameTheme };
