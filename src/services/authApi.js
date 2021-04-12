import axios from 'axios';

axios.defaults.baseURL = 'https://qa-test-api-hakaton2021goit.herokuapp.com';

export const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = ({ name, email, password }) => {
  return axios.post('/auth/register', { name, email, password }).then(data => data);
};

export const login = ({ email, password }) => {
  return axios.post('/auth/login', { email, password }).then(data => data);
};

export const logout = () => {
  return axios.post('auth/logout').then(data => data);
};

export const getUserInfo = () => {
  return axios.get('/users/current').then(data => data);
};

export const fetchQuestions = path => {
  return axios.get(`/api${path}`).then(data => data.data.data);
};

export const sendAnswers = answers => {
  return axios.post('/api/test-theory/result', answers).then(data => data.data.data);
};

export const refreshAccessToken = refreshToken => {
  return axios.post('/auth/refresh-token', refreshToken).then(data => data);
};

export const setUserAvatar = file => {
  return axios.patch('/images', file);
};
