import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../Container';
import Test from '../Test';
import { authSelectors } from 'redux/auth';
import { getQuestions } from '../../redux/test/testSelectors';

function PublicRoute({ children, redirectTo, restricted, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const path = redirectTo?.current?.pathname;
  const questions = useSelector(getQuestions);

  const page =
    questions.length > 0 && isLoggedIn ? (
      <Container>
        <Test />
      </Container>
    ) : (
      children
    );

  return (
    <Route {...routeProps}>
      {isLoggedIn && restricted ? <Redirect to={path === '/auth' ? '/' : path} /> : page}
    </Route>
  );
}

export default PublicRoute;
