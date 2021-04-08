import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, redirectTo, restricted, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn && restricted ? <Redirect to={redirectTo?.current?.pathname} /> : children}
    </Route>
  );
}

export default PublicRoute;
