import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../Container';
import Test from '../Test';
import { authSelectors } from 'redux/auth';
import { getQuestions, getAnswers } from '../../redux/test/testSelectors';
import { transformAnswers } from '../../services/transformAnswers';

function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const questions = useSelector(getQuestions);
  const answers = useSelector(getAnswers);
  const isRenderTest =
    questions.length > 0 && questions.length !== transformAnswers(answers).length;

  const page = isRenderTest ? (
    <Container>
      <Test />
    </Container>
  ) : (
    children
  );

  return <Route {...routeProps}>{isLoggedIn ? page : <Redirect to={redirectTo} />}</Route>;
}

export default PrivateRoute;
