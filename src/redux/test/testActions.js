import { createAction } from '@reduxjs/toolkit';

const addAnswer = createAction('test/addAnswer');
const resetAnswers = createAction('test/resetAnswer');
const resetResults = createAction('test/resetResult');
const addCategory = createAction('test/addCategory');
const addActiveCard = createAction('test/addActiveCard');
const testRefresh = createAction('test/refresh');

const testFetchRequest = createAction('test/testFetchRequest');
const testFetchSuccess = createAction('test/testFetchSuccess');
const testFetchError = createAction('test/testFetchError');

export default {
  addAnswer,
  resetAnswers,
  resetResults,
  addCategory,
  addActiveCard,
  testRefresh,
  testFetchRequest,
  testFetchSuccess,
  testFetchError,
};
