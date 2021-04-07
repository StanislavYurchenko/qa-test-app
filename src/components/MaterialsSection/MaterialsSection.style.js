import styled from 'styled-components';
import {
  PRIMARY_TEXT_COLOUR,
  PAGE_BORDER_COLOUR,
  PAGE_BACKGROUND_COLOUR,
} from '../../themes/colors';

export const SectionStyle = styled.section`
  margin: 0;
  text-align: left;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  padding: 40px 20px 56px;
  background-image: url();

  @media screen and (min-width: 768px) {
    padding: 41px 22px 76px;
  }

  @media screen and (min-width: 1290px) {
    padding: 40px 20px 65px;
  }
`;

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
