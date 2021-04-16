import { Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import testActions from '../../redux/test/testActions';
import { useEffect } from 'react';

import { authSelectors } from 'redux/auth';
import { getQuestions } from '../../redux/test/testSelectors';

function PublicRoute({ children, redirectTo, restricted, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const path = redirectTo?.current?.pathname;
  const questions = useSelector(getQuestions);
  const dispatch = useDispatch();
  const prevLocation = location.pathname;

  useEffect(() => {
    dispatch(testActions.setPath(prevLocation));
  }, []);

  const page = questions.length > 0 && isLoggedIn ? <Redirect to="/test" /> : children;

  return (
    <Route {...routeProps}>
      {isLoggedIn && restricted ? <Redirect to={path === '/auth' ? '/' : path} /> : page}
    </Route>
  );
}

export default PublicRoute;
