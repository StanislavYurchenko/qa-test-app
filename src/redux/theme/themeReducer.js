import { createReducer, combineReducers } from '@reduxjs/toolkit';
import themeActions from './themeAction';

const theme = createReducer(null, {
  [themeActions.setThemeSuccess]: (_, { payload }) => payload,
});

const nameTheme = createReducer('light', {
  [themeActions.setNameTheme]: (_, { payload }) => payload,
});

const themeReducer = combineReducers({
  theme,
  nameTheme,
});

export default themeReducer;
