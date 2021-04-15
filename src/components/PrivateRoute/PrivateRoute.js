import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';
import * as testSelectors from '../../redux/test/testSelectors';

function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const category = useSelector(testSelectors.getCategory);
  const { path } = routeProps;
  let page;

  if (path === '/test') {
    page = category ? children : <Redirect to="/" />;
  } else {
    page = children;
  }

  return <Route {...routeProps}>{isLoggedIn ? page : <Redirect to={redirectTo} />}</Route>;
}

export default PrivateRoute;
