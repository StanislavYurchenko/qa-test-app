import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

function Navigation() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/useful-info">Materials</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}

export default Navigation;
