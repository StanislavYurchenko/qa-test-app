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
    top: 7.1rem;
    right: ${props => (props.open ? 0 : '-110%')};
    position: absolute;
    width: 100vw;
    height: 100vh;
  } ;
`;

export const Logo = styled(Link)`
  display: block;
  width: 12.9rem;
  height: 2.8rem;
  margin-right: auto;
`;

export const ButtonWrap = styled(Box)`
  ${({ theme }) => `
   border-left: 1px solid ${theme.HEADER_BORDER_COLOR};
  `}
  border: ${props => props.border && 'none'};
  display: ${props => (props.toggle ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  min-height: 7rem;

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    display: ${props => (props.toggle ? 'none' : 'flex')};
  }
`;

export const ButtonStyles = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  min-width: 0;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-right: 1rem;
`;

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

export const ToggleLanguage = styled.button`
  ${({ theme }) => `
  background-color: ${theme.TOGGLE_BACKGROUND_COLOR};
  `};
  position: absolute;
  bottom: -55px;
  right: 12px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  width: 4rem;
  height: 2rem;
  outline: none;
  border: none;

  & span {
    font-family: Montserrat, sans-serif;
  }
`;

const useStyles = makeStyles(theme => ({
  toolBarStyles: {
    minHeight: '7rem',
    justifyContent: 'space-between',
    paddingLeft: '2rem',
    paddingRight: 0,
  },
}));

export { useStyles };
