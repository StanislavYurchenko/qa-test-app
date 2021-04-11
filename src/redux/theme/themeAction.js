import { createAction } from '@reduxjs/toolkit';

const setThemeSuccess = createAction('theme/toggleTheme');

const setNameTheme = createAction('theme/setNameTheme');

export default {
  setThemeSuccess,
  setNameTheme,
};
