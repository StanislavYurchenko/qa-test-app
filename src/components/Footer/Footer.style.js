import styled, { keyframes } from 'styled-components';
import BREAKPOINTS from '../../utils/breakpoints';
import { ReactComponent as Heart } from '../../images/icons/favorite-heart-button.svg';
import { ReactComponent as Copyright } from '../../images/icons/copyright.svg';
import { ReactComponent as Vector } from '../../images/icons/Vector.svg';

export const StyledFooter = styled.footer`
  ${({ theme }) => `
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 200;
  height: 56px;
  padding: 10px 18px;

  background-color: ${theme.ACCENT_BACKGROUND_COLOR};
  
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 20px 18px;
  }
  `}
`;

export const Text = styled.p`
  font-size: 10px;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.03em;
  color: #fff;
  opacity: 0.4;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.22;
  }
`;

export const StyledCopyright = styled(Copyright)`
  vertical-align: sub;
`;

export const StyledVector = styled(Vector)`
  vertical-align: sub;
`;

export const StyledHeart = styled(Heart)`
  vertical-align: sub;
  animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.6);
    }
  }
`;

export const StyledLink = styled.a`
  font-size: 10px;
  color: #fff;
  /* opacity: 0.4; */
  font-weight: 400;
  text-decoration: revert;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.22;
  }
`;
