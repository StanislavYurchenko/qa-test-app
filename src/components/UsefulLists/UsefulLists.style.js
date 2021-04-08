import styled from 'styled-components';
import {
  PRIMARY_TEXT_COLOUR,
  PAGE_BORDER_COLOUR,
  PAGE_BACKGROUND_COLOUR,
} from '../../themes/colors';

export const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 0.02em;
  color: ${PRIMARY_TEXT_COLOUR};
  border-bottom: 1px solid ${PAGE_BORDER_COLOUR};
  width: 130px;
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    width: 322px;
    padding-bottom: 22px;
    margin-bottom: 39px;
  }
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 56px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    width: 322px;
    padding-bottom: 22px;
    margin-bottom: 39px;
  }
`;
