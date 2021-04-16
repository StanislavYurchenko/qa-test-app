import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './testActions';

const category = createReducer('', {
  [testActions.testRefresh]: () => '',
  [testActions.addCategory]: (_, { payload }) => payload,
});

const questions = createReducer([], {
  [testActions.testFetchRequest]: () => [],
  [testActions.testFetchSuccess]: (_, { payload }) => payload,
  [testActions.addCategory]: () => [],

  [testActions.sendAnswersRequest]: () => [],
  [testActions.testRefresh]: () => [],
});

const answers = createReducer([], {
  [testActions.addCategory]: () => [],

  [testActions.testFetchRequest]: () => [],
  [testActions.addAnswer]: (state, { payload }) => ({ ...state, ...payload }),
  [testActions.resetAnswers]: () => [],
  [testActions.testRefresh]: () => [],
});

const initialResult = { correct: 0, wrong: 0 };

const result = createReducer(initialResult, {
  [testActions.testFetchRequest]: () => initialResult,
  [testActions.resetResults]: () => initialResult,
  [testActions.sendAnswersSuccess]: (_, { payload }) => payload,
});

const activeCard = createReducer(1, {
  [testActions.testFetchRequest]: () => 1,
  [testActions.sendAnswersSuccess]: () => 1,
  [testActions.addActiveCard]: (_, { payload }) => payload,
  [testActions.testRefresh]: () => 1,
});

const loading = createReducer(false, {
  [testActions.testFetchRequest]: () => true,
  [testActions.testFetchSuccess]: () => false,
  [testActions.testFetchError]: () => false,

  [testActions.sendAnswersRequest]: () => true,
  [testActions.sendAnswersSuccess]: () => false,
  [testActions.sendAnswersError]: () => false,
});

const error = createReducer(false, {
  [testActions.testFetchRequest]: () => false,
  [testActions.testFetchSuccess]: () => false,
  [testActions.testFetchError]: (_, { payload }) => payload,

  [testActions.sendAnswersRequest]: () => false,
  [testActions.sendAnswersSuccess]: () => false,
  [testActions.sendAnswersError]: (_, { payload }) => payload,
});

const path = createReducer('', {
  [testActions.setPath]: (_, { payload }) => payload,
});

const testReducer = combineReducers({
  category,
  questions,
  answers,
  result,
  loading,
  error,
  activeCard,
  path,
});

export default testReducer;
