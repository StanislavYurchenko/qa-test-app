import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { ACCENT_COLOUR, PRIMARY_TEXT_COLOUR } from '../../themes/colors';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import BREAKPOINT from '../../utils/breakpoints';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${PRIMARY_TEXT_COLOUR};
`;

export const Icon = styled(RemoveCircleIcon)`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1.5rem;
  color: ${ACCENT_COLOUR};
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    width: 12rem;
    height: 12rem;
  }
`;

export const Oops = styled.div`
  font-size: 6rem;
  margin-bottom: 3rem;
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    font-size: 8rem;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    font-size: 10rem;
  }
`;

export const Message = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    font-size: 3rem;
  }
`;

export const ErrorCode = styled.div`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const Return = styled.div`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const StyledLink = styled(Link)`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${ACCENT_COLOUR};
`;
