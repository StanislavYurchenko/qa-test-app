import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';
import { WHITE, PRIMARY_TEXT_COLOUR } from '../../themes/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.9rem;
  padding-bottom: 5rem;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 54rem;
    margin: 0 auto;
    padding-top: 8rem;
    padding-bottom: 7rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    justify-content: space-between;
    width: 103rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  } ;
`;

export const FormСontainer = styled.div`
  width: 28rem;
  margin: 3rem auto 0;
  padding: 3rem 2rem;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  background: ${WHITE};
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 54rem;
    margin: 3rem auto 0;
    padding: 6.2rem 5.7rem 4.2rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    width: 50.5rem;
    margin: 0;
    padding-left: 4rem;
    padding-right: 4rem;
  } ;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  color: ${PRIMARY_TEXT_COLOUR};
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 1.4rem;
    line-height: 1.7rem;
  } ;
`;

export const GoogleButton = styled.button``;
