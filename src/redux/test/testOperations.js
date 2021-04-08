import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../services/authApi';
import { getAnswers } from './testSelectors';

export const fetchTest = createAsyncThunk('test/fetchTest', async (_, rejectWithValue, path) => {
  try {
    console.log(`path`, path);
    const res = await fetchQuestions();
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const sendAnswers = createAsyncThunk('test/sendAnswers', async (_, rejectWithValue) => {
  try {
    const res = await sendAnswers(getAnswers);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});
