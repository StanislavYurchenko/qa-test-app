import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledWrapper = styled.div`
  padding: 0 0 22px 0;
`;

export const StyledCardMedia = styled.img`
  width: 280;
  height: 244px;
  margin-bottom: 20px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1280px) {
    width: 295px;
  }
`;

export const StyledCardContent = styled.ul`
  display: block;
  margin: 0 auto;
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
  background: rgba(2, 23, 42, 0.3);

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
