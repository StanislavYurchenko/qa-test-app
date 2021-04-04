import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { ACCENT_COLOUR } from '../../themes/colors';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header1 = styled.h1`
  margin: 0px 0px 10px;
`;

const Header2 = styled.h2`
  margin: 0px 0px 70px;
`;

const useStyles = makeStyles({
  tryAgain: {
    background: ACCENT_COLOUR,
    '&:hover': {
      background: ACCENT_COLOUR,
    },
    color: 'white',
    height: 48,
    padding: '17px 56px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',
  },
});

export { MainContainer, Header1, Header2, useStyles };
