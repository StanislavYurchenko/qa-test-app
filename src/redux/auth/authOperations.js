import authActions from './authAction';
import {
  registration,
  login,
  logout,
  getUserInfo,
  userToken,
  googleRequest,
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

  wrapperFunction(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await getUserInfo();
    const { result } = data;
    dispatch(authActions.getCurrentUserSuccess(result));
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
  dispatch(authActions.addAvatarRequest());

  try {
    await setUserAvatar(file);
    dispatch(authActions.addAvatarSuccess());
  } catch (err) {
    dispatch(authActions.addAvatarError(err.message));
  }
};

const refreshToken = refreshToken => async dispatch => {
  dispatch(authActions.refreshTokenRequest());

  try {
    const { data } = await refreshAccessToken({ refreshToken });
    if (data) {
      const { accessToken, expires_on } = data.result;
      userToken.set(accessToken);
      dispatch(authActions.refreshTokenSuccess({ accessToken, expires_on }));
    } else {
      dispatch(authActions.refreshTokenError('Error'));
      //Go to Login Page
    }
  } catch (err) {
    dispatch(authActions.refreshTokenError(err.message));
  }
};

// Функция обертка над запросами с токенами
const wrapperFunction = async token => {
  //Можно добавить проверку в локале - есть ли Токен в стейт, если нет - //Go to AuthPage
  // Если есть:
  if (Date.now() >= token.expires_on) {
    console.log(Date.now());
    // проверяетм срок Access Token
    try {
      await refreshToken(token.refreshToken);
      // await refreshToken(tokenData.refresh_token); // если истек - обновляем токен
    } catch (error) {
      dispatch(authActions.refreshTokenError('Error'));
      // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
      return; //Go to AuthPage
    }
  }
};

export {
  registrationUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  googleLogin,
  addAvatar,
  refreshToken,
};
