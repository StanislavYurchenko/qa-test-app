import styled from 'styled-components';

import BREAKPOINTS from '../../utils/breakpoints';

export const Section = styled.section`
  padding: 45px 0 20px;
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
  ${({ theme }) => `
  width: 130px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${theme.PRIMARY_TEXT_COLOR};

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
  `}
`;

export const FinishButton = styled.button`
  ${({ theme }) => `
  width: 130px;
  height: 48px;
  outline: none;
  border: none;
  box-shadow: 0px 4px 15px  ${theme.BOX_SHADOW_COLOR};

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.02em;
  color: #fff;

  background-color: ${theme.ACCENT_COLOR};
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background-color: ${theme.ACCENT_COLOR};
    cursor: pointer;
    box-shadow: 0px 4px 15px  ${theme.BOX_SHADOW_COLOR};
  }
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 190px;
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
  } ;
  `}
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  ${({ theme }) => `
  width: 55px;
  height: 34px;
  outline: none;
  border: none;
  background-color: ${theme.FORM_BACKGROUND_COLOR};
  box-shadow: 0px 4px 15px  ${theme.BOX_SHADOW_COLOR};
  transition: all 0.3s linear;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: ${theme.PRIMARY_TEXT_COLOR};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  &:not(:disabled):hover {
    background-color: ${theme.ACCENT_COLOR};
    box-shadow: 0px 4px 15px ${theme.BOX_SHADOW_COLOR};
  };
    

  &:disabled span {
    color: ${theme.DARK_GREY_TEXT_COLOR};
  }
  &:not(:disabled):hover span {
    color: ${theme.SECONDARY_TEXT_COLOR};
  };


  & svg {
    fill: ${theme.PRIMARY_TEXT_COLOR};
  };
  &:disabled svg {
    fill: ${theme.DARK_GREY_TEXT_COLOR};
  };
  &:not(:disabled):hover svg {
    fill: ${theme.SECONDARY_TEXT_COLOR};
  }


  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 210px;
    height: 34px;
  };
  `}
`;

export const ButtonSpan = styled.span`
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 0 11px;
    display: block;
  }
`;
