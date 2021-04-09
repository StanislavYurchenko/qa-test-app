import { createAction } from '@reduxjs/toolkit';

const addAnswer = createAction('test/addAnswer');
const resetAnswers = createAction('test/resetAnswer');
const addCategory = createAction('test/addCategory');
const addActiveCard = createAction('test/addActiveCard');

export default {
  addAnswer,
  resetAnswers,
  addCategory,
  addActiveCard,
};
