import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import { getCurrentUser } from './redux/auth/authOperations';

import PreLoader from './components/PreLoader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const MainPage = lazy(() => import('pages/MainPage' /* webpackChunkName: "MainPage" */));
const AuthPage = lazy(() => import('pages/AuthPage' /* webpackChunkName: "AuthPage" */));
const ResultsPage = lazy(() => import('pages/ResultsPage' /* webpackChunkName: "ResultsPage" */));
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
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
            <div>Страница доп материалов</div>
          </PrivateRoute>

          <PublicRoute path="/contacts">
            <ContactsPage />
          </PublicRoute>

          <PublicRoute path="/results" redirectTo="/auth">
            <ResultsPage />
          </PublicRoute>

          <PublicRoute>
            <div>not found</div>
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
