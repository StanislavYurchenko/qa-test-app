import { createAsyncThunk } from '@reduxjs/toolkit';
// import testActions from './testActions';
// import { checkNeedsToUpdate } from '../auth/authOperations';
import * as service from '../../services/authApi';

export const fetchTest = createAsyncThunk('test/fetchTest', async (path, rejectWithValue) => {
  try {
    const res = await service.fetchQuestions(path);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// export const fetchTest = () => async (dispatch, getState) => {
//   try {
//     const response = await checkNeedsToUpdate(dispatch, getState);
//     if (!response) {
//       return;
//     }

//     dispatch(testActions.testFetchRequest());

//     const res = await service.fetchQuestions(path);
//     dispatch(testActions.testFetchSuccess(res));
//   } catch (err) {
//     dispatch(testActions.testFetchError(err.message));
//   }
// };

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
