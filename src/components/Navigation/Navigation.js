import React from 'react';
import {
  StyledNav,
  StyledNavList,
  StyledNavListItem,
  StyledNavLink,
} from '../Navigation/Navigation.style';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { authSelectors } from 'redux/auth';
import { getTheme } from '../../redux/theme/themeSelectors';
import { ROLE } from '../../utils/constants';
import { createMuiTheme } from '@material-ui/core/styles';

function Navigation({ isModalOpen, onButtonClick }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const role = useSelector(authSelectors.getRole);
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const { t, i18n } = useTranslation();

  return (
    <StyledNav mobile={isModalOpen}>
      <StyledNavList>
        <StyledNavListItem>
          {isLoggedIn && (
            <StyledNavLink to="/" exact onClick={onButtonClick} theme={customTheme}>
              {t('header__menuHome')}
            </StyledNavLink>
          )}
        </StyledNavListItem>
        <StyledNavListItem>
          {isLoggedIn && (
            <StyledNavLink to="/useful-info" onClick={onButtonClick} theme={customTheme}>
              {t('header__menuMaterials')}
            </StyledNavLink>
          )}
        </StyledNavListItem>
        <StyledNavListItem>
          {isLoggedIn && role === ROLE.ADMIN && (
            <StyledNavLink to="/admin" onClick={onButtonClick} theme={customTheme}>
              AdminSettings
            </StyledNavLink>
          )}
        </StyledNavListItem>
        <StyledNavListItem lastitem="true">
          <StyledNavLink to="/contacts" onClick={onButtonClick} theme={customTheme}>
            {t('header__menuContacts')}
          </StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
    </StyledNav>
  );
}

export default Navigation;
