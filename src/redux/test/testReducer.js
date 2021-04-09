import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './testActions';
import { fetchTest, sendAnswers } from './testOperations';

const category = createReducer('', {
  [testActions.addCategory]: (_, { payload }) => payload,
});

const questions = createReducer([], {
  [fetchTest.pending]: () => [],
  [fetchTest.fulfilled]: (_, { payload }) => payload,

  [sendAnswers.fulfilled]: () => [],
});

const answers = createReducer([], {
  [fetchTest.pending]: () => [],

  [testActions.addAnswer]: (state, { payload }) => ({ ...state, ...payload }),
  // [testActions.addAnswer]: (state, { payload }) => [
  //   ...state.filter(item => item.questionId !== payload.questionId),
  //   payload,
  // ],

  [sendAnswers.fulfilled]: () => [],
});

const result = createReducer(null, {
  [fetchTest.pending]: () => null,
  [sendAnswers.fulfilled]: (_, { payload }) => payload,
});
const card = createReducer(1, {
  [testActions.addActiveCard]: (_, { payload }) => payload,
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
  result,
  loading,
  error,
  card,
});

export default testReducer;
