import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import BREAKPOINT from '../../utils/breakpoints';
import { PAGE_BACKGROUND_COLOUR } from '../../themes/colors';

export const StyledContainer = styled(Box)`
  width: ${BREAKPOINT.MOBILE_CONTAINER};
  margin-left: auto;
  margin-right: auto;
  padding: 71px 0;
  min-height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    width: ${BREAKPOINT.TABLET_CONTAINER};
  }
  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    width: ${BREAKPOINT.DESKTOP_CONTAINER};
  }
`;
