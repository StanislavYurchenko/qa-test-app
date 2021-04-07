import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './testActions';
import { fetchTest, sendAnswers } from './testOperations';

const category = createReducer('', {});

const questions = createReducer([], {
  [fetchTest.pending]: () => [],
  [fetchTest.fulfilled]: (_, { payload }) => payload,

  [sendAnswers.fulfilled]: () => [],
});

const answers = createReducer([], {
  [testActions.addAnswer]: (state, { payload }) => ({ ...state, ...payload }),

  [sendAnswers.fulfilled]: () => [],
});

const loading = createReducer(false, {
  [fetchTest.pending]: () => true,
  [fetchTest.fulfilled]: () => false,
  [fetchTest.rejected]: () => false,

  [sendAnswers.pending]: () => true,
  [sendAnswers.fulfilled]: () => false,
  [sendAnswers.rejected]: () => false,
});

const error = createReducer('', {
  [fetchTest.pending]: () => '',
  [fetchTest.rejected]: (_, { payload }) => payload,

  [sendAnswers.pending]: () => '',
  [sendAnswers.rejected]: () => (_, { payload }) => payload,
});

const testReducer = combineReducers({
  category,
  questions,
  answers,
  loading,
  error,
});

export default testReducer;
