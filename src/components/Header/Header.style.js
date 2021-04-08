import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {
  PRIMARY_TEXT_COLOUR,
  PAGE_BACKGROUND_COLOUR,
  HEADER_BORDER_COLOUR,
  SECONDARY_TEXT_COLOUR,
  DARK_GREY_TEXT_COLOUR,
} from '../../themes/colors';
import BREAKPOINT from '../../utils/breakpoints';

export const Modal = styled(Box)`
  right: ${props => (props.open ? 0 : '-100%')};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  padding: 2.6rem 0;
  text-align: center;
  transition: right 0.5s linear;
  @media screen and (min-width: ${BREAKPOINT.MOBILE_MAX}) {
    display: none;
  } ;
`;

export const HeaderWrap = styled(Box)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
  @media screen and (min-width: ${BREAKPOINT.MOBILE_BREAKPOINT}) {
    max-width: ${BREAKPOINT.TABLET};
  }
  @media screen and (min-width: ${BREAKPOINT.TABLET_BREAKPOINT}) {
    max-width: ${BREAKPOINT.DESKTOP};
  }
`;

export const Logo = styled(Link)`
  display: block;
  width: 129px;
  height: 28px;
  margin-right: auto;
`;

export const ButtonWrap = styled(Box)`
  display: ${props => (props.toggle ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  min-width: 55px;
  min-height: 70px;
  border-left: 1px solid ${HEADER_BORDER_COLOUR};

  @media screen and (min-width: ${BREAKPOINT.MOBILE_MAX}) {
    display: ${props => (props.toggle ? 'none' : 'flex')};
  } ;
`;

export const ButtonStyles = styled(Button)`
  width: 15px;
  height: 15px;
  padding: 0px;
  min-width: 0px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${SECONDARY_TEXT_COLOUR};
  color: ${DARK_GREY_TEXT_COLOUR};
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-right: 1rem;
`;

export const UserName = styled.p`
  display: none;
  margin-right: 2rem;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.02em;
  color: ${PRIMARY_TEXT_COLOUR};

  @media screen and (min-width: ${BREAKPOINT.MOBILE_MAX}) {
    display: block;
  } ;
`;

const useStyles = makeStyles(theme => ({
  headerStyles: {
    boxShadow: 'none',
    backgroundColor: `${PAGE_BACKGROUND_COLOUR}`,
    borderBottom: `1px solid ${HEADER_BORDER_COLOUR}`,
    zIndex: 11,
  },
  toolBarStyles: {
    minHeight: '70px',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: 0,
  },

  TestNav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingRight: '20px',
    },
  },
}));

export { useStyles };
