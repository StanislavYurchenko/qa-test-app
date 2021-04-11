import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BREAKPOINTS from '../../utils/breakpoints';

const activeClassName = 'nav-item-active';

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  position: relative;
  color: #000;
  padding: 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.05em;
  &.${activeClassName} {
    &::after {
      position: absolute;
      left: 0;
      bottom: 8px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      border-radius: 2px;
      background-color: #ff6b09;
    }
  }
  @media screen and (max-width: 767px) {
    border-bottom: 1px solid #e2e3e5;
    padding: 26px 0;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-right: ${props => (props.lastlink ? '0px' : '70px')};
    font-size: 12px;
    line-height: 1.33;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 14px;
    line-height: 1.14;
    margin-right: ${props => (props.lastlink ? '0px' : '90px')};
  }
`;

export const StyledNav = styled.nav`
  @media screen and (max-width: 767px) {
    // display: none;
    display: ${props => (props.mobile ? 'flex' : 'none')};
    flex-direction: ${props => (props.mobile ? 'column' : null)};
    // position: absolute;
    // top: 100%;
    // left: 0;
    width: 100%;
    // z-index: 100;

    // padding-top: 60px;
    // padding-bottom: 60px;

    // background-color: $primaryBackgroundColor;

    // align-items: center;
    // border-top: 1px solid #ececec;
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-right: 30px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-right: 75px;
  }
`;

// const activeClassName = 'nav-item-active';

// const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
//   &.${activeClassName} {
//     color: red;
//   }
// `;
