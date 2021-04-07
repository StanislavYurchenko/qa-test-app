import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import BREAKPOINT from '../../utils/breakpoints';

export const MainContainer = styled(Box)`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 71px;

  @media screen and (min-width: ${BREAKPOINT.MOBILE_BREAKPOINT}) {
    max-width: ${BREAKPOINT.TABLET};
  }
  @media screen and (min-width: ${BREAKPOINT.TABLET_BREAKPOINT}) {
    max-width: ${BREAKPOINT.DESKTOP};
  }
`;
