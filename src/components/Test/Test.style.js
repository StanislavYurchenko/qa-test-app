import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';

export const Section = styled.section`
  padding: 90px 20px 80px;
  max-width: 652px;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    max-width: 820px;
  } ;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    max-width: 820px;
  } ;
`;

export const Title = styled.h2`
  width: 130px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #000000;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 210px;
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    width: 210px;
    font-size: 22px;
    line-height: 27px;
  } ;
`;

export const FinishButton = styled.button`
  width: 130px;
  height: 48px;
  outline: none;
  border: none;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.02em;

  background-color: #fff;
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background-color: #ff6b09;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 190px;
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
  } ;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 55px;
  height: 34px;
  outline: none;
  border: none;
  background-color: #fff;
  transition: all 0.3s linear;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled svg {
    fill: rgba(2, 23, 42, 0.1);
  }

  &:not(:disabled):hover {
    background-color: #ff6b09;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  }

  &:not(:disabled):hover svg {
    fill: #fff;
  }

  &:not(:disabled):hover span {
    color: #fff;
  }

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 210px;
    height: 34px;
  }
`;

export const ButtonSpan = styled.span`
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 0 11px;
    display: block;
  }
`;
