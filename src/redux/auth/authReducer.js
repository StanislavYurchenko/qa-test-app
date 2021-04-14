import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './authAction';

const initialState = { name: null, token: null, avatar: null, role: null };

const user = createReducer(initialState, {
  [authActions.loginUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutUserSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (
    state,
    { payload: { name, email, avatar, subscription, role } },
  ) => {
    return { ...state, name, email, avatar, subscription, role };
  },
  [authActions.googleUserSuccess]: (_, { payload }) => payload,
  [authActions.refreshTokenSuccess]: (state, { payload: { accessToken, expires_on } }) => {
    return { ...state, token: { ...state.token, accessToken, expires_on } };
  },
  [authActions.addAvatarSuccess]: (state, { payload: { avatar } }) => {
    return { ...state, avatar };
  },
  [authActions.getCurrentUserError]: () => initialState,
  [authActions.refreshTokenError]: () => initialState,
});

const successfulReg = createReducer(false, {
  [authActions.regUserSuccess]: () => true,
  [authActions.regUserError]: () => false,
});

const isLoggedIn = createReducer(false, {
  [authActions.loginUserSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.googleUserSuccess]: () => true,
  [authActions.refreshTokenSuccess]: () => true,

  [authActions.loginUserError]: () => false,
  [authActions.logoutUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.googleUserError]: () => false,
  [authActions.refreshTokenError]: () => false,
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

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [authActions.googleUserRequest]: () => true,
  [authActions.googleUserSuccess]: () => false,
  [authActions.googleUserError]: () => false,

  [authActions.refreshTokenRequest]: () => true,
  [authActions.refreshTokenSuccess]: () => false,
  [authActions.refreshTokenError]: () => false,

  [authActions.addAvatarRequest]: () => true,
  [authActions.addAvatarSuccess]: () => false,
  [authActions.addAvatarError]: () => false,
});

const error = createReducer(false, {
  [authActions.regUserRequest]: () => false,
  [authActions.regUserSuccess]: () => false,
  [authActions.regUserError]: (_, { payload }) => payload,

  [authActions.loginUserRequest]: () => false,
  [authActions.loginUserSuccess]: () => false,
  [authActions.loginUserError]: (_, { payload }) => payload,

  [authActions.logoutUserRequest]: () => false,
  [authActions.logoutUserSuccess]: () => false,
  [authActions.logoutUserError]: (_, { payload }) => payload,

  [authActions.getCurrentUserRequest]: () => false,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,

  [authActions.loginUserRequest]: () => false,
  [authActions.loginUserSuccess]: () => false,
  [authActions.loginUserError]: (_, { payload }) => payload,

  [authActions.googleUserRequest]: () => false,
  [authActions.googleUserSuccess]: () => false,
  [authActions.googleUserError]: (_, { payload }) => payload,

  [authActions.refreshTokenRequest]: () => false,
  [authActions.refreshTokenSuccess]: () => false,
  [authActions.refreshTokenError]: (_, { payload }) => payload,

  [authActions.addAvatarRequest]: () => false,
  [authActions.addAvatarSuccess]: () => false,
  [authActions.addAvatarError]: (_, { payload }) => payload,
});

const authUsersReducer = combineReducers({
  user,
  successfulReg,
  isLoggedIn,
  loading,
  error,
});

export default authUsersReducer;
