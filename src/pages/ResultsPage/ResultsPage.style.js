import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { ACCENT_COLOUR } from '../../themes/colors';

const MainContainer = styled.div`
  position: relative;
  top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    top: 110px;
  }
`;

const Header1 = styled.h1`
  margin: 0px 0px 10px;
`;

const Header2 = styled.h2`
  margin: 0px 0px 30px;

  @media screen and (min-width: 768px) {
    margin: 0px 0px 70px;
  }
`;

const StyledImage = styled.img`
  width: 120px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 176px;
    margin-bottom: 10px;
  }
`;

const useStyles = makeStyles({
  tryAgain: {
    background: ACCENT_COLOUR,
    '&:hover': {
      background: ACCENT_COLOUR,
    },
    color: 'white',
    height: 48,
    marginBottom: '40px',
    padding: '17px 56px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',

    ['@media screen and (min-width: 768px)']: {
      marginBottom: '107px',
    },

    ['@media screen and (min-width: 1280px)']: {
      marginBottom: '60px',
    },
  },
});

export { MainContainer, Header1, Header2, StyledImage, useStyles };
