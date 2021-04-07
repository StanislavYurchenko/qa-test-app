import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './testActions';

const category = createReducer('', {});

const questions = createReducer([], {
  [testActions.fetchTestsRequest]: () => [],
  [testActions.fetchTestsSuccess]: (_, { payload }) => {
    console.log(`payload`, payload);
    return payload;
  },
  [testActions.fetchTestsError]: () => [],
});

const answers = createReducer([], {
  [testActions.addAnswer]: (state, { payload }) => ({ ...state, ...payload }),
});

const loading = createReducer(false, {
  [testActions.fetchTestsRequest]: () => true,
  [testActions.fetchTestsSuccess]: () => false,
  [testActions.fetchTestsError]: () => false,
});

const error = createReducer('', {
  [testActions.fetchTestsRequest]: () => '',
  [testActions.fetchTestsSuccess]: () => '',
  [testActions.fetchTestsError]: (_, { payload }) => payload,
});

const testReducer = combineReducers({
  category,
  questions,
  answers,
  loading,
  error,
});

export default testReducer;
