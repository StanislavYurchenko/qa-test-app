import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../Container';
import TestPage from '../../pages/TestPage';
import { authSelectors } from 'redux/auth';
import { getQuestions } from '../../redux/test/testSelectors';

function PublicRoute({ children, redirectTo, restricted, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const path = redirectTo?.current?.pathname;
  const questions = useSelector(getQuestions);

  const page =
    questions.length > 0 && isLoggedIn ? (
      <Container>
        <TestPage />
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
