import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import { getCurrentUser } from './redux/auth/authOperations';

import PreLoader from './components/PreLoader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const MainPage = lazy(() => import('pages/MainPage/MainPage' /* webpackChunkName: "MainPage" */));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage" */));
const ResultsPage = lazy(() =>
  import('pages/ResultsPage/ResultsPage' /* webpackChunkName: "ResultsPage" */),
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);
const MaterialsPage = lazy(() =>
  import('pages/MaterialsPage/MaterialsPage' /* webpackChunkName: "MaterialsPage" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<PreLoader sizePreloader="200px" />}>
          <Switch>
            <PublicRoute path="/auth" redirectTo="/" restricted>
              <AuthPage />
            </PublicRoute>

            <PrivateRoute exact path="/" redirectTo="/auth">
              <MainPage />
            </PrivateRoute>

            <PrivateRoute path="/materials" redirectTo="/auth">
              <MaterialsPage />
            </PrivateRoute>

            <PublicRoute path="/contacts">
              <ContactsPage />
            </PublicRoute>

            <PrivateRoute path="/results" redirectTo="/auth">
              <ResultsPage />
            </PrivateRoute>

            <PublicRoute>
              <div>not found</div>
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
