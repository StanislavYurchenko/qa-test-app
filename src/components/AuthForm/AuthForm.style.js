import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';

export const AuthFormWrapper = styled.div`
  margin-top: 2rem;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin-top: 3rem;
  }
`;
