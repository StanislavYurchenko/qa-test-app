import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as phoneBookApi from 'api/phoneBookApi';

export const signup = createAsyncThunk('auth/signup', async (contact, { rejectWithValue }) => {
  // try {
  //   const response = await phoneBookApi.signup(contact);
  //   phoneBookApi.authToken.set(response.token);
  //   return response;
  // } catch (error) {
  //   return rejectWithValue(error);
  // }
});

export const login = createAsyncThunk('auth/login', async (contact, { rejectWithValue }) => {
  // try {
  //   const response = await phoneBookApi.login(contact);
  //   phoneBookApi.authToken.set(response.token);
  //   return response;
  // } catch (error) {
  //   return rejectWithValue(error);
  // }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  // try {
  //   const response = await phoneBookApi.logout();
  //   phoneBookApi.authToken.unset();
  //   return response;
  // } catch (error) {
  //   return rejectWithValue(error);
  // }
});

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, getState }) => {
    // const state = getState();
    // const persistedToken = state.auth.token;
    // if (!Boolean(persistedToken)) return rejectWithValue();
    // phoneBookApi.authToken.set(persistedToken);
    // try {
    //   return await phoneBookApi.getUser();
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  },
);
