import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './authAction';

const initialState = { name: null, token: null, avatar: null, role: null };

const user = createReducer(initialState, {
  [authActions.loginUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutUserSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.googleUserSuccess]: (_, { payload }) => payload,
  [authActions.refreshTokenSuccess]: (state, { payload }) => {
    return { ...state, token: { ...payload } };
  },
  [authActions.refreshTokenError]: () => initialState,
});

const successfulReg = createReducer(false, {
  [authActions.regUserSuccess]: () => true,
  [authActions.regUserError]: () => false,
  [authActions.loginUserSuccess]: () => false,
});

const token = createReducer(
  {},
  {
    [authActions.loginUserSuccess]: (_, { payload }) => payload.token,
    [authActions.googleUserSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutUserSuccess]: () => {},
    [authActions.getCurrentUserError]: () => {},
    [authActions.refreshTokenError]: () => {},
  },
);

const isLoggedIn = createReducer(false, {
  [authActions.loginUserSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  // [authActions.getCurrentUserRequest]: () => true,
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

  [authActions.getCurrentUserRequest]: () => '',
  [authActions.getCurrentUserSuccess]: () => '',
  [authActions.getCurrentUserError]: (_, { payload }) => payload,

  [authActions.loginUserRequest]: () => '',
  [authActions.loginUserSuccess]: () => '',
  [authActions.loginUserError]: (_, { payload }) => payload,

  [authActions.googleUserRequest]: () => '',
  [authActions.googleUserSuccess]: () => '',
  [authActions.googleUserError]: (_, { payload }) => payload,

  [authActions.refreshTokenRequest]: () => '',
  [authActions.refreshTokenSuccess]: () => '',
  [authActions.refreshTokenError]: (_, { payload }) => payload,

  [authActions.addAvatarRequest]: () => '',
  [authActions.addAvatarSuccess]: () => '',
  [authActions.addAvatarError]: (_, { payload }) => payload,
});

// const userAvatar = createReducer(null, {
//   [authActions.loginUserSuccess]: (_, { payload }) => payload.avatar,
//   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.avatar,
//   [authActions.logoutUserSuccess]: () => null,
// });

const authUsersReducer = combineReducers({
  user,
  successfulReg,
  token,
  isLoggedIn,
  loading,
  error,
  // userAvatar,
});

export default authUsersReducer;
