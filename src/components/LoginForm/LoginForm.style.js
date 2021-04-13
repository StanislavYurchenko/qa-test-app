import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import {
  SECONDARY_TEXT_COLOUR,
  ACCENT_COLOUR,
  PRIMARY_TEXT_COLOUR,
  LOGIN_BORDER_COLOUR,
  WHITE,
} from '../../themes/colors';
import BREAKPOINTS from '../../utils/breakpoints';

export const useStyles = makeStyles(theme => ({
  inputText: {
    width: '100%',
    marginBottom: 20,
    fontSize: '1.7rem',
  },
}));

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActiveButton = styled.button`
  width: 11rem;
  height: 6rem;
  border: none;
  border-radius: 0.4rem;
  color: ${SECONDARY_TEXT_COLOUR};
  background-color: ${ACCENT_COLOUR};
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 20rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const NotActiveButton = styled.button`
  width: 11rem;
  height: 6rem;
  border: 1px solid ${LOGIN_BORDER_COLOUR};
  border-radius: 0.4rem;
  color: ${PRIMARY_TEXT_COLOUR};
  background-color: ${WHITE};
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 20rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;
