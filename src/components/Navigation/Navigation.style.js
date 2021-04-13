import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BREAKPOINTS from '../../utils/breakpoints';

const activeClassName = 'nav-item-active';

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: inline-block;
  position: relative;
  color: #000;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.05em;
  &::focus,
  &::hover {
    background-color: yellow;
  }

  &.${activeClassName} {
    &::after {
      position: absolute;
      left: 0;
      bottom: 23px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      border-radius: 2px;
      background-color: #ff6b09;
      @media screen and (min-width: 768px) {
        bottom: 8px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 26px 0;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 12px;
    line-height: 1.33;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 14px;
    line-height: 1.14;
  }
`;

export const StyledNavListItem = styled.li`
  @media screen and (max-width: 767px) {
    border-bottom: 1px solid #e2e3e5;
    width: 100%;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-right: ${props => (props.lastitem ? '0px' : '70px')};
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 14px;
    line-height: 1.14;
    margin-right: ${props => (props.lastitem ? '0px' : '90px')};
  }
`;

export const StyledNav = styled.nav`
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-right: 30px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-right: 75px;
  }
`;

export const StyledNavList = styled.ul`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    display: flex;
    flex-direction: row;
  }
`;
