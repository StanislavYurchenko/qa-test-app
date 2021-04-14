import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../services/authApi';

export const fetchTest = createAsyncThunk('test/fetchTest', async (path, rejectWithValue) => {
  try {
    const res = await service.fetchQuestions(path);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const sendAnswers = createAsyncThunk(
  'test/sendAnswers',
  async ({ rout, readyAnswers }, { rejectWithValue }) => {
    try {
      const res = await service.sendAnswers(rout, readyAnswers);
      return res;
    } catch (error) {
      return error;
    }
  },
);
