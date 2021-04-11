import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
// import { ReportSharp } from '@material-ui/icons';

export const Wrapper = styled.li`
  margin: 0 auto;
  position: relative;
  width: 280px;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;

    &:nth-child(odd) {
      margin-right: 20px;
    }

    &:nth-last-child(-n + 2) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1290px) {
    width: 295px;
    margin-right: 20px;

    &:nth-child(4n) {
      margin-right: 0px;
    }

    &:nth-last-child(-n + 2) {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledCard = styled.div`
  ${({ theme }) => `
    background-color: ${theme.SECONDARY_TEXT_COLOR};
    border-radius: 0;
    box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
    width: 280px;
    padding: 0;

    @media screen and (min-width: 768px) {
      width: 352px;

      &:nth-child(odd) {
        margin-right: 20px;
      }

      &:nth-last-child(-n + 2) {
        margin-bottom: 0px;
      }
    }

    @media screen and (min-width: 1290px) {
      width: 295px;
      margin-right: 20px;

      &:nth-child(4n) {
        margin-right: 0px;
      }

      &:nth-last-child(-n + 2) {
        margin-right: 20px;
      }
    }
  `}
`;

export const StyledWrapper = styled.div`
  padding: 0 0 22px 0;
  width: 280;
`;

export const StyledCardMedia = styled.img`
  width: 280;
  height: 244px;
  margin-bottom: 20px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const StyledCardContent = styled.ul`
  display: block;
  text-align: left;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 31px 0 29px;
  }
`;

export const StyledTypography = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.PRIMARY_TEXT_COLOR};
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  `}
`;

export const StyledParagraph = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.DARK_GREY_TEXT_COLOR};
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
  `}
`;

export const StyledAbout = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.PRIMARY_TEXT_COLOR};
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;

    @media screen and (min-width: 768px) {
    font-size: 14px;
    }
 `}
`;

export const Overlay = styled.div`
  background: rgba(2, 23, 42, 0.5);

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  z-index: 99;
  transition: opacity 0.2s linear, visibility 0.2s linear;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
