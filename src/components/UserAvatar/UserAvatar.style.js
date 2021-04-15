import styled from 'styled-components';
import BREAKPOINT from '../../utils/breakpoints';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 19px;
`;

const UserName = styled.p`
  ${({ theme }) => `
   color: ${theme.PRIMARY_TEXT_COLOR};
  `}
  display: none;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    display: block;
  } ;
`;

const AvatarBlock = styled.div`
  ${({ theme }) => `
   border-color: ${theme.PRIMARY_TEXT_COLOR};
  `}
  width: 40px;
  height: 40px;
  border: 2px solid;
  border-radius: 50%;
  background-color: transparent;
  margin-right: 19px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export { AvatarBlock, Avatar, UserName, Wrapper };
