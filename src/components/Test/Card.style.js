import { RadioGroup, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';

export const CardBox = styled.div`
  /* max-width: 652px; */
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  margin: 0 auto;
  padding: 40px 20px;
  margin-bottom: 20px;
`;

export const Counter = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.02em;
  //text-transform: uppercase;
  color: #555555;
  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
export const Page = styled.span`
  font-weight: bold;
  color: orange;
`;

export const Question = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 28px;

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 130px;
    border: 1px solid #00122f;
    opacity: 0.15;
    margin-top: 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;

    &::after {
      width: 320px;
      margin-top: 30px;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  span + span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #000000;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const StyledRG = styled(RadioGroup)`
  font-size: 30px;
  color: #121212;
`;
