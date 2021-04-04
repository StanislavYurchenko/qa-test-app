import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PreLoader from './components/PreLoader';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const MainPage = lazy(() => import('pages/MainPage/MainPage' /* webpackChunkName: "MainPage" */));

const AuthPage = lazy(() => import('pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage" */));

function App() {
  return (
    <>
      <Suspense fallback={<PreLoader sizePreloader="200px" />}>
        <Switch>
          <PublicRoute exact path="/auth">
            <AuthPage />
          </PublicRoute>

          <PrivateRoute path="/" redirectTo="/auth">
            <MainPage />
          </PrivateRoute>

          <PublicRoute>
            <div>not found</div>
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
