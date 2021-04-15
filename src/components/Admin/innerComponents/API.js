import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from '../Admin.module.css';
import screenShot from '../../../images/screenshots/swagger-screen.png';

const API = () => {
  const location = useLocation();

  return (
    <>
      <h2 className={s.title}>API</h2>
      <NavLink
        to={{
          pathname: 'https://qa-test-api-hakaton2021goit.herokuapp.com/api-docs/',
          state: { from: location.pathname },
        }}
        className={`${s.links} ${s.api}`}
        activeClassName={s.activeLinks}
        target="_blank"
      >
        <span>QA Test Service (Swagger UI)</span>
        <img className={s.screenShots} src={screenShot} width="100px" />
      </NavLink>
    </>
  );
};

export default API;
