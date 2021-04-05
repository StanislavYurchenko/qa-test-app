import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './authAction';

const initialUserState = { name: null, email: null };

const userName = createReducer(initialUserState, {
  [authActions.loginUserSuccess]: (_, { payload }) => payload.name,
  [authActions.logoutUserSuccess]: () => initialUserState,
  // [authActions.regUserSuccess]: (_, { payload }) => payload.user,
  // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const successfulReg = createReducer(false, {
  [authActions.regUserSuccess]: () => true,
  [authActions.regUserError]: () => false,
  [authActions.loginUserSuccess]: () => false,
});

const token = createReducer(null, {
  [authActions.loginUserSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutUserSuccess]: () => null,
  // [authActions.regUserSuccess]: (_, { payload }) => payload.token,
});

const isLoggedIn = createReducer(false, {
  [authActions.loginUserSuccess]: () => true,
  // [authActions.regUserSuccess]: () => true,
  // [authActions.getCurrentUserSuccess]: () => true,

  [authActions.loginUserError]: () => false,
  [authActions.logoutUserSuccess]: () => false,
  // [authActions.regUserError]: () => false,
  // [authActions.getCurrentUserError]: () => false,
});

const loading = createReducer(false, {
  [authActions.regUserRequest]: () => true,
  [authActions.regUserSuccess]: () => false,
  [authActions.regUserError]: () => false,

  [authActions.loginUserRequest]: () => true,
  [authActions.loginUserSuccess]: () => false,
  [authActions.loginUserError]: () => false,

  [authActions.logoutUserRequest]: () => true,
  [authActions.logoutUserSuccess]: () => false,
  [authActions.logoutUserError]: () => false,

  // [authActions.getCurrentUserRequest]: () => true,
  // [authActions.getCurrentUserSuccess]: () => false,
  // [authActions.getCurrentUserError]: () => false,
});

const error = createReducer('', {
  [authActions.regUserRequest]: () => '',
  [authActions.regUserSuccess]: () => '',
  [authActions.regUserError]: (_, { payload }) => payload,

  [authActions.loginUserRequest]: () => '',
  [authActions.loginUserSuccess]: () => '',
  [authActions.loginUserError]: (_, { payload }) => payload,

  [authActions.logoutUserRequest]: () => '',
  [authActions.logoutUserSuccess]: () => '',
  [authActions.logoutUserError]: (_, { payload }) => payload,

  // [authActions.getCurrentUserRequest]: () => '',
  // [authActions.getCurrentUserSuccess]: () => '',
  // [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const authUsersReducer = combineReducers({
  userName,
  successfulReg,
  token,
  isLoggedIn,
  loading,
  error,
});

export default authUsersReducer;
