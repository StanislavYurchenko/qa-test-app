import { createReducer, combineReducers } from '@reduxjs/toolkit';
import themeActions from './themeAction';

const theme = createReducer(null, {
  [themeActions.setThemeSuccess]: (_, { payload }) => payload,
});

const themeReducer = combineReducers({
  theme,
});

export default themeReducer;
