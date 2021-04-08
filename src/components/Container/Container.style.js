import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import BREAKPOINT from '../../utils/breakpoints';
import { PAGE_BACKGROUND_COLOUR } from '../../themes/colors';

export const MainContainer = styled(Box)`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 71px 20px 71px;
  height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  @media screen and (min-width: ${BREAKPOINT.MOBILE_BREAKPOINT}) {
    max-width: ${BREAKPOINT.TABLET};
  }
  @media screen and (min-width: ${BREAKPOINT.TABLET_BREAKPOINT}) {
    max-width: ${BREAKPOINT.DESKTOP};
  }
`;
