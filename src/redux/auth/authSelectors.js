export const getUserName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const isSuccessfulReg = state => state.auth.successfulReg;
export const loading = state => state.auth.loading;
export const error = state => state.auth.error;
export const getUserAvatar = state => state.auth.user.avatar;
export const getTokenData = state => state.auth.user.token;
