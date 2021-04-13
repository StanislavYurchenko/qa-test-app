import authActions from './authAction';
import {
  registration,
  login,
  logout,
  getUserInfo,
  userToken,
  setUserAvatar,
  refreshAccessToken,
} from '../../services/authApi';

const registrationUser = ({ name, email, password }) => async dispatch => {
  dispatch(authActions.regUserRequest());

  try {
    await registration({ name, email, password });
    dispatch(authActions.regUserSuccess());
  } catch (err) {
    dispatch(authActions.regUserError(err.message));
  }
};

const loginUser = ({ email, password }) => async dispatch => {
  dispatch(authActions.loginUserRequest());

  try {
    const { data } = await login({ email, password });
    const { name, token, avatar, role } = data.result;
    userToken.set(token.accessToken);
    dispatch(authActions.loginUserSuccess({ name, token, avatar, role }));
  } catch (err) {
    dispatch(authActions.loginUserError(err.message));
  }
};

const logoutUser = () => async dispatch => {
  dispatch(authActions.logoutUserRequest());

  try {
    await logout();
    userToken.unset();
    dispatch(authActions.logoutUserSuccess());
  } catch (err) {
    dispatch(authActions.logoutUserError(err.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  userToken.set(persistedToken.accessToken);

  const isUpdate = await isNeedToUpdateToken(persistedToken)(dispatch);
  console.log(isUpdate);
  if (isUpdate) {
    dispatch(authActions.getCurrentUserRequest());

    try {
      const { data } = await getUserInfo();
      const { result } = data;
      dispatch(authActions.getCurrentUserSuccess(result));
      console.log('запрос');
    } catch (err) {
      dispatch(authActions.getCurrentUserError(err.message));
    }
  }
};

const googleLogin = queryParams => dispatch => {
  const { name, role, accessToken, refreshToken, expires_on } = queryParams;
  dispatch(authActions.googleUserRequest());

  try {
    userToken.set(accessToken);
    dispatch(
      authActions.googleUserSuccess({
        name,
        role,
        token: { accessToken, refreshToken, expires_on },
      }),
    );
  } catch (err) {
    dispatch(authActions.googleUserError(err.message));
  }
};

const addAvatar = file => async dispatch => {
  dispatch(authActions.addAvatarRequest());

  try {
    await setUserAvatar(file);
    dispatch(authActions.addAvatarSuccess());
  } catch (err) {
    dispatch(authActions.addAvatarError(err.message));
  }
};

const getToken = refreshToken => async dispatch => {
  dispatch(authActions.refreshTokenRequest());

  console.log({ refreshToken });

  try {
    const { data } = await refreshAccessToken({ refreshToken });
    console.log(data);
    const { accessToken, expires_on } = data.result.token;
    userToken.set(accessToken);
    dispatch(authActions.refreshTokenSuccess({ accessToken, expires_on }));
    return true;
  } catch (err) {
    userToken.unset();
    dispatch(authActions.refreshTokenError(err.message));
    console.log('gh');
    return false;
  }
};

const isNeedToUpdateToken = token => async dispatch => {
  if (Date.now() >= token.expires_on) {
    console.log(token.refreshToken);
    return await getToken(token.refreshToken)(dispatch);
  }
  return true;
};

export {
  registrationUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  googleLogin,
  addAvatar,
  getToken,
};
