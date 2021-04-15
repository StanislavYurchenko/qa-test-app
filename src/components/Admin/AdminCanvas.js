import { Suspense, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import Container from '../Container';
import PreLoader from '../PreLoader';
import UnderConstruct from './innerComponents/UnderConstruct';
import ListOfUsers from './innerComponents/ListOfUsers';
import s from './Admin.module.css';

const Users = lazy(() => import('./innerComponents/Users' /* webpackChunkName: "admin-users" */));
const Tests = lazy(() => import('./innerComponents/Tests' /* webpackChunkName: "admin-users" */));
const API = lazy(() => import('./innerComponents/API' /* webpackChunkName: "admin-api" */));

const AdminCanvas = () => {
  const { path } = useRouteMatch();

  return (
    <div className={s.adminCanvas}>
      <Suspense
        fallback={
          <Container>
            <PreLoader sizePreloader="100px" />
          </Container>
        }
      >
        <Route path={`${path}/`} exact>
          <API />
        </Route>

        <Route path={`${path}/users`}>
          <Users />
        </Route>

        <Route path={`${path}/tests`}>
          <Tests />
        </Route>

        <Route path={`${path}/construct`}>
          <UnderConstruct />
        </Route>

        <Route path={`${path}/results`}>
          <ListOfUsers />
        </Route>
      </Suspense>
    </div>
  );
};

export default AdminCanvas;
