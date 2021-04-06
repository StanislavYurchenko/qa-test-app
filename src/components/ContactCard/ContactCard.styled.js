import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { PRIMARY_TEXT_COLOUR, DARK_GREY_TEXT_COLOUR } from '../../themes/colors';

export const StyledCard = styled(Card)`
  border-radius: 0;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  margin-bottom: 20px;
  width: 280px;
  padding: 0;

  @media screen and (min-width: 720px) {
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
`;

export const StyledWrapper = styled(CardActionArea)`
  padding: 0 0 22px 0;
  width: 240;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 244px;
  margin-bottom: 20px;
  object-fit: cover;

  @media screen and (min-width: 720px) {
    width: 352px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledCardContent = styled(CardContent)`
  text-align: left;
  padding: 0 20px;

  @media screen and (min-width: 720px) {
    padding: 0 31px 0 29px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${PRIMARY_TEXT_COLOUR};
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
`;

export const StyledParagraph = styled(Typography)`
  color: ${DARK_GREY_TEXT_COLOUR};
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

export const StyledAbout = styled(Typography)`
  color: ${PRIMARY_TEXT_COLOUR};
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;

  @media screen and (min-width: 720px) {
    font-size: 14px;
  }
`;

export const Overlay = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(252, 227, 138, 0.9) 0%,
    rgba(243, 129, 129, 0.9) 100%
  );
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
