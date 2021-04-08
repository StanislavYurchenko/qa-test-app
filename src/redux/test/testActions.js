import { createAction } from '@reduxjs/toolkit';

const addAnswer = createAction('test/addAnswer');
const resetAnswers = createAction('test/resetAnswer');
const addCategory = createAction('test/addCategory');
const setResult = createAction('test/setResult');

// const fetchTestsRequest = createAction('tests/fetchTestsRequest');
// const fetchTestsSuccess = createAction('tests/fetchTestsSuccess');
// const fetchTestsError = createAction('tests/fetchTestsError');

export default {
  addAnswer,
  resetAnswers,
  addCategory,
  setResult,
  // fetchTestsRequest,
  // fetchTestsSuccess,
  // fetchTestsError,
};
