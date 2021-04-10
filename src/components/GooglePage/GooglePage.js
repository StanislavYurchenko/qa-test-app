import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../redux/auth/authOperations';

const GooglePage = () => {
  const dispatch = useDispatch();
  const queryParams = queryString.parse(location.search);
  dispatch(googleLogin(queryParams));

  return <div>"Hello World"</div>;
};

export default GooglePage;
