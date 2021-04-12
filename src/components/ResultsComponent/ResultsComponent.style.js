import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BREAKPOINTS from '../../utils/breakpoints';

const MainContainer = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  background-color: ${theme.PAGE_BACKGROUND_COLOR};
  color:  ${theme.PRIMARY_TEXT_COLOR};

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-top: 40px;
  }
   `}
`;

const Header1 = styled.h1`
  margin: 0px 0px 10px;

  font-size: 12px;
  line-height: 2.5;
  letter-spacing: 0.02em;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 22px;
    line-height: 1.36;
  }
`;

const Header2 = styled.h2`
  margin-bottom: 30px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-bottom: 70px;

    font-size: 14px;
    line-height: 1.21;
  }
`;

const StyledImage = styled.img`
  width: 120px;
  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 176px;
    margin-bottom: 10px;
  }
`;

const useStyles = makeStyles({
  tryAgain: theme => ({
    background: theme.ACCENT_COLOR,
    '&:hover': {
      background: theme.ACCENT_COLOR,
    },
    color: theme.SECONDARY_TEXT_COLOR,
    width: 190,
    height: 48,
    marginBottom: '40px',
    padding: '17px 56px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '1.21',
    letterSpacing: '0.02em',
    textTransform: 'inherit',

    [`@media screen and (min-width: ${BREAKPOINTS.TABLET})`]: {
      marginBottom: '107px',
    },

    [`@media screen and (min-width: ${BREAKPOINTS.DESKTOP})`]: {
      marginBottom: '60px',
    },
  }),
});

export { MainContainer, Header1, Header2, StyledImage, useStyles };
