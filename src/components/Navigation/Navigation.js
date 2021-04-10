import React from 'react';
import { StyledNavLink } from '../Navigation/Navigation.style';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn && (
        <>
          <StyledNavLink to="/" exact>
            Home
          </StyledNavLink>
          <StyledNavLink to="/useful-info">Materials</StyledNavLink>
        </>
      )}

      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </nav>
  );
}

export default Navigation;
