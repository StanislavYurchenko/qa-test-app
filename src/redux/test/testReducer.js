import { createReducer, combineReducers } from '@reduxjs/toolkit';

const category = createReducer('', {});

const questions = createReducer([], {});

const answers = createReducer([], {});

const loading = createReducer(false, {});

const error = createReducer('', {});

const testReducer = combineReducers({
  category,
  questions,
  answers,
  loading,
  error,
});

export default testReducer;
