import styled from 'styled-components';
import { PRIMARY_TEXT_COLOUR, PAGE_BORDER_COLOUR } from '../../themes/colors';

import BREAKPOINT from '../../utils/breakpoints';

export const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  text-align: left;
  letter-spacing: 0.02em;
  color: ${PRIMARY_TEXT_COLOUR};
  border-bottom: 1px solid ${PAGE_BORDER_COLOUR};
  width: 130px;
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    font-size: 22px;
    line-height: 1.36;
    width: 322px;
    padding-bottom: 22px;
    margin-bottom: 25px;
  }
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 25px;

  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-align: left;
  width: 207px;

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    font-size: 14px;
    width: 295px;
    padding-left: 60px;
    margin-bottom: 35px;
  }
`;
export const Link = styled.a`
  text-decoration: underline;
  :visited {
    color: ${PRIMARY_TEXT_COLOUR};
  }
`;
