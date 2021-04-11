import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../Container';
import Test from '../Test';
import { authSelectors } from 'redux/auth';
import { getQuestions } from '../../redux/test/testSelectors';

function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const questions = useSelector(getQuestions);

  const page =
    questions.length > 0 ? (
      <Container>
        <Test />
      </Container>
    ) : (
      children
    );

  return <Route {...routeProps}>{isLoggedIn ? page : <Redirect to={redirectTo} />}</Route>;
}

export default PrivateRoute;
