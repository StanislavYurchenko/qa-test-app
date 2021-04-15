import { createAction } from '@reduxjs/toolkit';

const regUserRequest = createAction('auth/regUserRequest');
const regUserSuccess = createAction('auth/regUserSuccess');
const regUserError = createAction('auth/regUserError');

const loginUserRequest = createAction('auth/loginUserRequest');
const loginUserSuccess = createAction('auth/loginUserSuccess');
const loginUserError = createAction('auth/loginUserError');

const logoutUserRequest = createAction('auth/logoutUserRequest');
const logoutUserSuccess = createAction('auth/logoutUserSuccess');
const logoutUserError = createAction('auth/logoutUserError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const googleUserRequest = createAction('auth/googleUserRequest');
const googleUserSuccess = createAction('auth/googleUserSuccess');
const googleUserError = createAction('auth/googleUserError');

const addAvatarRequest = createAction('auth/addAvatarRequest');
const addAvatarSuccess = createAction('auth/addAvatarSuccess');
const addAvatarError = createAction('auth/addAvatarError');

const refreshTokenRequest = createAction('auth/refreshTokenRequest');
const refreshTokenSuccess = createAction('auth/refreshTokenSuccess');
const refreshTokenError = createAction('auth/refreshTokenError');

const getStudentsListRequest = createAction('auth/getStudentsListRequest');
const getStudentsListSuccess = createAction('auth/getStudentsListSuccess');
const getStudentsListError = createAction('auth/getStudentsListError');

const getAdminsListRequest = createAction('auth/getAdminsListRequest');
const getAdminsListSuccess = createAction('auth/getAdminsListSuccess');
const getAdminsListError = createAction('auth/getAdminsListError');

export default {
  regUserRequest,
  regUserSuccess,
  regUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  googleUserRequest,
  googleUserSuccess,
  googleUserError,
  addAvatarRequest,
  addAvatarSuccess,
  addAvatarError,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
  getStudentsListRequest,
  getStudentsListSuccess,
  getStudentsListError,
  getAdminsListRequest,
  getAdminsListSuccess,
  getAdminsListError,
};
