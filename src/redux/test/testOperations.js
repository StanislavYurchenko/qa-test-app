import axios from 'axios';
import { getTestTheory } from '../../services/testApi';
import testActions from './testActions';

axios.defaults.baseURL = 'http://qa-test-api-hakaton2021goit.herokuapp.com';

export const fetchQuestions = () => async dispatch => {
  dispatch(testActions.fetchTestsRequest());

  try {
    const response = await testServices.getTestTheory();
    console.log(`response`, response);
    dispatch(testActions.fetchTestsSuccess(response.data));
  } catch (error) {
    dispatch(testActions.fetchTestsError(error));
  }
};
