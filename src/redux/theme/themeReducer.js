import { createReducer, combineReducers } from '@reduxjs/toolkit';

const category = createReducer('', {});

const questions = createReducer([], {});

const themeReducer = combineReducers({});

export default themeReducer;
