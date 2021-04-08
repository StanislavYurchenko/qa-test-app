import styled from 'styled-components';
// import { TABLET } from '../../utils/breakpoints';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 110px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 114px;
    padding-bottom: 114px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 12px;
  line-height: 1.66;
  font-weight: 700;
`;
