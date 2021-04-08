import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../services/authApi';
import { getAnswers } from './testSelectors';
import testAction from './testActions';

export const fetchTest = createAsyncThunk('test/fetchTest', async (path, rejectWithValue) => {
  try {
    // console.log(`path`, path);
    const res = await service.fetchQuestions(path);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const sendAnswers = createAsyncThunk(
  'test/sendAnswers',
  async (answers, { rejectWithValue }) => {
    try {
      const res = await service.sendAnswers(answers);
      console.log(`res`, res);
      // dispatch(testAction.setResult(res));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
