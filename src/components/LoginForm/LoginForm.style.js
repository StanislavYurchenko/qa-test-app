import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import BREAKPOINTS from '../../utils/breakpoints';
import { colorsDark } from '../../themes/colors';

export const useStyles = makeStyles(() => ({
  inputText: theme => ({
    width: '100%',
    marginBottom: 20,
    borderRadius: '0px',
    borderColor: 'blue',

    '& label': {
      fontSize: 14,
      color:
        theme.PRIMARY_TEXT_COLOR === colorsDark.PRIMARY_TEXT_COLOR
          ? theme.PRIMARY_TEXT_COLOR
          : theme.LOGIN_TEXT_COLOR,
    },

    '& fieldset': {
      borderColor:
        theme.PRIMARY_TEXT_COLOR === colorsDark.PRIMARY_TEXT_COLOR
          ? theme.LOGIN_BORDER_COLOR
          : theme.LOGIN_TEXT_COLOR,
    },
  }),
  resize: theme => ({
    fontSize: 14,
    color: theme.PRIMARY_TEXT_COLOR,
  }),
}));

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActiveButton = styled.button`
  ${({ theme }) => `
    width: 11rem;
    height: 6rem;
    border: none;
    border-radius: 0.4rem;
    color: ${theme.SECONDARY_TEXT_COLOR};
    background-color: ${theme.ACCENT_COLOR};
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 700;
    font-family: Montserrat, sans-serif;
    cursor: pointer;
    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
      width: 20rem;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  `}
`;

export const NotActiveButton = styled.button`
  ${({ theme }) => `
    width: 11rem;
    height: 6rem;
    border: 1px solid ${theme.LOGIN_BORDER_COLOR};
    border-radius: 0.4rem;
    color: ${theme.PRIMARY_TEXT_COLOR};
    background-color: ${theme.FORM_BACKGROUND_COLOR};
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 700;
    font-family: Montserrat, sans-serif;
    cursor: pointer;
    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
      width: 20rem;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  `}
`;
