import React from 'react';
import { StyledNavLink, StyledNav } from '../Navigation/Navigation.style';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function Navigation({ isModalOpen, onButtonClick }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StyledNav mobile={isModalOpen}>
      {isLoggedIn && (
        <>
          <StyledNavLink to="/" exact onClick={onButtonClick}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/useful-info" onClick={onButtonClick}>
            Materials
          </StyledNavLink>
        </>
      )}

      <StyledNavLink to="/contacts" onClick={onButtonClick} lastlink="true">
        Contacts
      </StyledNavLink>
    </StyledNav>
  );
}

export default Navigation;
