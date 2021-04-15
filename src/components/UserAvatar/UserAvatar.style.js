import styled from 'styled-components';
import BREAKPOINT from '../../utils/breakpoints';

const UserName = styled.p`
  ${({ theme }) => `
   color: ${theme.PRIMARY_TEXT_COLOR};
  `}
  display: none;
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    display: block;
  } ;
`;

const AppBlock = styled.div`
  ${({ theme }) => `
   border-color: ${theme.PRIMARY_TEXT_COLOR};
  `}
  position:relative;
  left: -4px;
  width: 40px;
  height: 40px;
  border: 2px solid;
  border-radius: 50%;
  background-color: transparent;
  margin-right: 1rem;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export { AppBlock, Avatar, UserName };
