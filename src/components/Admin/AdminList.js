import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import s from './Admin.module.css';

const AdminList = () => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={s.adminSidebar}>
      <NavLink
        to={{
          pathname: `${url}`,
          state: { from: location.pathname },
        }}
        className={s.links}
        activeClassName={s.activeLinks}
        exact
      >
        API
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/users`,
          state: { from: location.pathname },
        }}
        className={s.links}
        activeClassName={s.activeLinks}
      >
        Users options
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/tests`,
          state: { from: location.pathname },
        }}
        className={s.links}
        activeClassName={s.activeLinks}
      >
        Tests options
      </NavLink>
    </div>
  );
};

export default AdminList;
