import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './testActions';
import { fetchTest, sendAnswers } from './testOperations';

const category = createReducer('', {
  [testActions.addCategory]: (_, { payload }) => payload,
  [testActions.testRefresh]: () => '',
  // [sendAnswers.fulfilled]: () => '',
});

const questions = createReducer([], {
  [fetchTest.pending]: () => [],
  [fetchTest.fulfilled]: (_, { payload }) => payload,

  [sendAnswers.fulfilled]: () => [],
  [testActions.testRefresh]: () => [],
});

const answers = createReducer([], {
  [fetchTest.pending]: () => [],

  [testActions.addAnswer]: (state, { payload }) => ({ ...state, ...payload }),
  // [testActions.addAnswer]: (state, { payload }) => [
  //   ...state.filter(item => item.questionId !== payload.questionId),
  //   payload,
  // ],
  [testActions.resetAnswers]: () => [],
  [testActions.testRefresh]: () => [],
});

const result = createReducer(
  { correct: 0, wrong: 0 },
  {
    [testActions.resetResults]: () => {
      return { correct: 0, wrong: 0 };
    },
    // [fetchTest.pending]: () => {},
    [fetchTest.pending]: () => {
      return { correct: 0, wrong: 0 };
    },
    [sendAnswers.fulfilled]: (_, { payload }) => payload,
  },
);

const activeCard = createReducer(1, {
  [fetchTest.pending]: () => 1,
  [sendAnswers.fulfilled]: () => 1,
  [testActions.addActiveCard]: (_, { payload }) => payload,
  [testActions.testRefresh]: () => 1,
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
  activeCard,
});

export default testReducer;
