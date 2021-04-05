import authActions from './authAction';
import { registration, login, logout, userToken } from '../../services/authApi';

const registrationUser = ({ name, email, password }) => async dispatch => {
  dispatch(authActions.regUserRequest());

  try {
    const data = await registration({ name, email, password });
    dispatch(authActions.regUserSuccess());
  } catch (err) {
    console.log(err);
    dispatch(authActions.regUserError(err.message));
  }
};

const loginUser = ({ email, password }) => async dispatch => {
  dispatch(authActions.loginUserRequest());

  try {
    const { data } = await login({ email, password });
    const { name, token } = data.result;
    userToken.set(token);
    dispatch(authActions.loginUserSuccess({ name, token }));
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

// const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) return;
//   userToken.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());

//   axios
//     .get('/users/current')
//     .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
//     .catch(error => dispatch(authActions.getCurrentUserError()));
// };

export { registrationUser, loginUser, logoutUser };
