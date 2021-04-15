import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { ROLE } from '../../utils/constants';

function SuperPrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const role = useSelector(authSelectors.getRole);

  return (
    <Route {...routeProps}>
      {isLoggedIn && role === ROLE.ADMIN ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default SuperPrivateRoute;
