import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authSelectors } from 'redux/auth';
import * as testSelectors from '../../redux/test/testSelectors';
import { transformAnswers } from '../../services/transformAnswers';
import testActions from '../../redux/test/testActions';

function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const category = useSelector(testSelectors.getCategory);
  const questions = useSelector(testSelectors.getQuestions);
  const answers = useSelector(testSelectors.getAnswers);
  const location = useLocation();
  const dispatch = useDispatch();

  const prevLocation = location.pathname;
  let page;

  const isRenderTest =
    questions.length > 0 &&
    // questions.length !== transformAnswers(answers).length &&
    routeProps.path !== '/results';

  if (routeProps.path === '/test') {
    page = category ? children : <Redirect to="/" />;
  } else {
    dispatch(testActions.setPath(location.pathname));
    page = isRenderTest ? <Redirect to="/test" /> : children;
  }

  return <Route {...routeProps}>{isLoggedIn ? page : <Redirect to={redirectTo} />}</Route>;
}

export default PrivateRoute;
