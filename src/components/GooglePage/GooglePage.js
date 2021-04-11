import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { googleLogin } from '../../redux/auth/authOperations';
import { getQuestions } from '../../redux/test/testSelectors';

const GooglePage = () => {
  const questions = useSelector(getQuestions);

  const history = useHistory();
  const dispatch = useDispatch();
  const queryParams = queryString.parse(location.search);
  dispatch(googleLogin(queryParams));
  questions.length > 0 ? history.push('/test') : history.push('/');

  return null;
};

export default GooglePage;
