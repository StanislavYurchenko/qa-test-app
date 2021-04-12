import styled from 'styled-components';
import { ReactComponent as Heart } from '../../images/icons/favorite-heart-button.svg';
import { ReactComponent as Copyright } from '../../images/icons/copyright.svg';
import { ReactComponent as Vector } from '../../images/icons/Vector.svg';

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #02172a;
  width: 100%;
  height: 56px;
  padding: 10px 18px;
  @media screen and (min-width: 768px) {
    padding: 20px 18px;
  }
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
`;

export const StyledLink = styled.a`
  font-size: 10px;
  // letter-spacing: 0.03em;
  color: #fff;
  opacity: 0.4;
  font-weight: 400;
  text-decoration: revert;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.22;
  }
`;
