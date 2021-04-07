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

export const getTestTheory = () => {
  return axios.get('/test-theory').then(data => data);
};

export const getTestTech = () => {
  return axios.get('/test-tech').then(data => data);
};
