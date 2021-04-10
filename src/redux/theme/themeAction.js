import { createAction } from '@reduxjs/toolkit';

const setThemeSuccess = createAction('theme/toggleTheme');

export default {
  setThemeSuccess,
};
