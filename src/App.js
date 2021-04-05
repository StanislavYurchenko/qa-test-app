import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomeView = lazy(() => import('views/HomeView/HomePge' /* webpackChunkName: "HomePge" */));

const LoginView = lazy(() =>
  import('views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);

const LogoutView = lazy(() =>
  import('views/LogoutView/LogoutView' /* webpackChunkName: "LogoutView" */),
);

const SignupView = lazy(() =>
  import('views/SignupView/SignupView' /* webpackChunkName: "SignupView" */),
);

const ContactsListView = lazy(() =>
  import('views/ContactsListView/ContactsListView' /* webpackChunkName: "ContactsListView" */),
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/phone-book" restricted>
            <LoginView />
          </PublicRoute>

          <PublicRoute path="/signup" redirectTo="/phone-book" restricted>
            <SignupView />
          </PublicRoute>

          <PrivateRoute path="/logout" redirectTo="/login">
            <LogoutView />
          </PrivateRoute>

          <PublicRoute path="/contacts">
            <ContactsListView />
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
