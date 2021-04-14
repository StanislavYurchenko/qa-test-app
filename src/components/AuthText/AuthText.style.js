import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';

export const Wrapper = styled.div`
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    width: 42rem;
    padding-top: 8.2rem;
    margin-right: 10.5rem;
  }
`;

export const PageHeader = styled.h2`
  ${({ theme }) => `
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.4rem;
    letter-spacing: 0.02em;
    font-family: Montserrat, sans-serif;
    color: ${theme.PRIMARY_TEXT_COLOR};
    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
      font-size: 3rem;
      line-height: 3.7rem;
    }
    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
      font-size: 3.4rem;
      line-height: 4.1rem;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => `
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.02em;
    color: ${theme.DARK_GREY_TEXT_COLOR};
    font-family: Montserrat, sans-serif;
    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
      margin-top: 2rem;
      font-size: 1.6rem;
      line-height: 3.6rem;
    }
    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
      margin-top: 1.9rem;
      font-size: 1.8rem;
      line-height: 3.6rem;
    }
  `}
`;

export const Accent = styled.span`
  ${({ theme }) => `
    color: ${theme.PRIMARY_TEXT_COLOR};
    font-weight: bold;
  `}
`;
