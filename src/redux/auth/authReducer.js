import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { signup, login, logout, getUser } from './authOperations';

const iniUserState = { name: 'Anonymous', email: null };

const userReducer = createReducer(iniUserState, {
  [signup.fulfilled]: (_, { payload }) => payload.user,
  [login.fulfilled]: (_, { payload }) => payload.user,
  [logout.fulfilled]: () => iniUserState,
  [getUser.fulfilled]: (_, { payload }) => payload,
  [getUser.rejected]: () => iniUserState,
});

const tokenReducer = createReducer(null, {
  [signup.fulfilled]: (_, { payload }) => payload.token,
  [login.fulfilled]: (_, { payload }) => payload.token,
  [logout.fulfilled]: () => null,
  [getUser.rejected]: () => null,
});

const isLoggedInReducer = createReducer(false, {
  [signup.fulfilled]: () => true,
  [login.fulfilled]: () => true,
  [logout.fulfilled]: () => false,
  [getUser.fulfilled]: () => true,
  [getUser.rejected]: () => false,
});

const loadingReducer = createReducer(false, {
  [signup.pending]: () => true,
  [signup.fulfilled]: () => false,
  [signup.rejected]: () => false,
  [login.pending]: () => true,
  [login.fulfilled]: () => false,
  [login.rejected]: () => false,
  [logout.pending]: () => true,
  [logout.fulfilled]: () => false,
  [logout.rejected]: () => false,
  [getUser.pending]: () => true,
  [getUser.fulfilled]: () => false,
  [getUser.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [signup.rejected]: (_, { payload }) => payload,
  [signup.pending]: () => null,
  [login.rejected]: (_, { payload }) => payload,
  [login.pending]: () => null,
  [logout.rejected]: (_, { payload }) => payload,
  [logout.pending]: () => null,
  [getUser.rejected]: (_, { payload }) => payload,
  [getUser.pending]: () => null,
});

const isRefreshingUserReducer = createReducer(false, {
  [getUser.pending]: () => true,
  [getUser.rejected]: () => false,
  [getUser.fulfilled]: () => false,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedInReducer,
  loading: loadingReducer,
  error: errorReducer,
  isRefreshingUser: isRefreshingUserReducer,
});
