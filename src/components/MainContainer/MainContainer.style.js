import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { PAGE_BACKGROUND_COLOUR } from '../../themes/colors';

export const StyledContainer = styled(Box)`
  ${({ theme }) => `
  background-color: ${theme.PAGE_BACKGROUND_COLOR};
  width: 100%;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  padding: 70px 0;
  `}
`;
