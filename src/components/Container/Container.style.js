import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import BREAKPOINT from '../../utils/breakpoints';
import { PAGE_BACKGROUND_COLOUR } from '../../themes/colors';

export const StyledContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - (71px + 56px));
  background-color: ${PAGE_BACKGROUND_COLOUR};
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    width: ${BREAKPOINT.TABLET_CONTAINER};
  }
  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    width: ${BREAKPOINT.DESKTOP_CONTAINER};
  }
`;
