import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import BREAKPOINT from '../../utils/breakpoints';

export const HeaderWrap = styled(Box)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
`;

export const HeaderStyle = styled(AppBar)`
  ${({ theme }) => `
       background-color: ${theme.PAGE_BACKGROUND_COLOR};
     border-bottom: 1px solid ${theme.HEADER_BORDER_COLOR};
  `}
  box-shadow: none;
  z-index: 11;
`;

export const NavWrap = styled(Box)`
  ${({ theme }) => `
  background-color: ${theme.PAGE_BACKGROUND_COLOR};
  `}
  text-align: center;
  transition: right 0.5s linear;
  @media screen and (max-width: ${BREAKPOINT.MOBILE_MAX}) {
    top: 71px;
    right: ${props => (props.open ? 0 : '-100%')};
    position: absolute;
    width: 100vw;
    height: 100vh;
  } ;
`;

export const Logo = styled(Link)`
  display: block;
  width: 129px;
  height: 28px;
  margin-right: auto;
`;

export const ButtonWrap = styled(Box)`
  ${({ theme }) => `
   border-left: 1px solid ${theme.HEADER_BORDER_COLOR};
  `}
  display: ${props => (props.toggle ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  min-width: 55px;
  min-height: 70px;

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    display: ${props => (props.toggle ? 'none' : 'flex')};
  }
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

  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-right: 1rem;
`;
/* background-color: ${SECONDARY_TEXT_COLOUR}; */
/* color: ${DARK_GREY_TEXT_COLOUR}; */

export const UserName = styled.p`
  ${({ theme }) => `
   color: ${theme.PRIMARY_TEXT_COLOR};
  `}
  display: none;
  margin-right: 2rem;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.02em;
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    display: block;
  } ;
`;

const useStyles = makeStyles(theme => ({
  toolBarStyles: {
    minHeight: '70px',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: 0,
  },
}));

export { useStyles };
