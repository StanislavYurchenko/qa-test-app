import React from 'react';
import {
  StyledNav,
  StyledNavList,
  StyledNavListItem,
  StyledNavLink,
} from '../Navigation/Navigation.style';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function Navigation({ isModalOpen, onButtonClick }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StyledNav mobile={isModalOpen}>
      <StyledNavList>
        <StyledNavListItem>
          {isLoggedIn && (
            <StyledNavLink to="/" exact onClick={onButtonClick}>
              Home
            </StyledNavLink>
          )}
        </StyledNavListItem>
        <StyledNavListItem>
          {isLoggedIn && (
            <StyledNavLink to="/useful-info" onClick={onButtonClick}>
              Materials
            </StyledNavLink>
          )}
        </StyledNavListItem>
        <StyledNavListItem lastitem="true">
          <StyledNavLink to="/contacts" onClick={onButtonClick}>
            Contacts
          </StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
    </StyledNav>
  );
}

export default Navigation;
