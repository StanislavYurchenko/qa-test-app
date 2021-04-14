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

const logoutUser = () => async (dispatch, getState) => {
  try {
    const response = await checkNeedsToUpdate(dispatch, getState);
    if (!response) {
      return;
    }

    dispatch(authActions.logoutUserRequest());

    await logout();
    userToken.unset();
    dispatch(authActions.logoutUserSuccess());
  } catch (err) {
    dispatch(authActions.logoutUserError(err.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  try {
    const response = await checkNeedsToUpdate(dispatch, getState);
    if (!response) {
      return;
    }

    dispatch(authActions.getCurrentUserRequest());

    const { data } = await getUserInfo();
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (err) {
    dispatch(authActions.getCurrentUserError(err.message));
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
  try {
    const response = await checkNeedsToUpdate(dispatch, getState);
    if (!response) {
      return;
    }

    dispatch(authActions.addAvatarRequest());

    await setUserAvatar(file);
    dispatch(authActions.addAvatarSuccess());
  } catch (err) {
    dispatch(authActions.addAvatarError(err.message));
  }
};

const getToken = refreshToken => async dispatch => {
  dispatch(authActions.refreshTokenRequest());

  try {
    const { data } = await refreshAccessToken(refreshToken);

    if (!data) {
      userToken.unset();
      dispatch(authActions.refreshTokenError(err.message));
      return false;
    }
    const { accessToken, expires_on } = data.result.token;
    userToken.set(accessToken);
    dispatch(authActions.refreshTokenSuccess({ accessToken, expires_on }));
    return true;
  } catch (err) {
    userToken.unset();
    dispatch(authActions.refreshTokenError(err.message));
    return false;
  }
};

const isNeedToUpdateToken = token => (Date.now() >= token.expires_on ? true : false);

const checkNeedsToUpdate = async (dispatch, getState) => {
  const {
    auth: {
      user: { token },
    },
  } = getState();

  if (!token) return false;

  try {
    if (isNeedToUpdateToken(token)) {
      await getToken(token.refreshToken)(dispatch);
    } else {
      userToken.set(token.accessToken);
    }
    return true;
  } catch (error) {
    return error.message;
  }
};

export {
  registrationUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  googleLogin,
  addAvatar,
  getToken,
  checkNeedsToUpdate,
};
