import React, { useEffect, Suspense, lazy, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useLocation, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Google from './components/GooglePage';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { getCurrentUser } from './redux/auth/authOperations';

import PreLoader from './components/PreLoader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
// import { getQuestions } from './redux/test/testSelectors';

const MainPage = lazy(() => import('pages/MainPage' /* webpackChunkName: "MainPage" */));
const AuthPage = lazy(() => import('pages/AuthPage' /* webpackChunkName: "AuthPage" */));
const ResultsPage = lazy(() => import('pages/ResultsPage' /* webpackChunkName: "ResultsPage" */));
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);
const Test = lazy(() => import('./components/Test' /* webpackChunkName: "Test" */));
const MaterialsPage = lazy(() =>
  import('pages/MaterialsPage' /* webpackChunkName: "MaterialsPage" */),
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  // const history = useHistory();
  // const questions = useSelector(getQuestions);

  // const isTest = location.pathname === '/test' && questions.length > 0

  // console.log(location.pathname)
  // console.log(questions.length > 0)

  const currentRoute = useRef(location);

  // useEffect(() => {
  //   // console.log(questions.length)
  //   // if(questions.length > 0) {
  //     console.log('open')
  //     // history.push('/test');
  //     return
  //   }
  // },[]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={<PreLoader sizePreloader="200px" />}>
          <Switch>
            <PrivateRoute exact path="/" redirectTo="/auth">
              <Container>
                <MainPage />
              </Container>
            </PrivateRoute>
            <PrivateRoute path="/useful-info" redirectTo="/auth">
              <MaterialsPage />
            </PrivateRoute>
            <PublicRoute path="/contacts">
              {/* <Container> */}
              <ContactsPage />
              {/* </Container> */}
            </PublicRoute>
            <PrivateRoute path="/test" redirectTo="/auth">
              <Container>
                <Test />
              </Container>
            </PrivateRoute>
            <PrivateRoute path="/results" redirectTo="/auth">
              <Container>
                <ResultsPage />
              </Container>
            </PrivateRoute>
            <PublicRoute path="/auth" redirectTo={currentRoute} restricted>
              <Container>
                <AuthPage />
              </Container>
            </PublicRoute>
            <PublicRoute path="/google">
              <Google />
            </PublicRoute>
            <PublicRoute>
              <Container>
                <NotFoundPage />
              </Container>
            </PublicRoute>
          </Switch>
        </Suspense>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
