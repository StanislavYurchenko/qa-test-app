import styled from 'styled-components';

export const SectionStyle = styled.section`
  ${({ theme }) => `
     background-color: ${theme.PAGE_BACKGROUND_COLOR};
     margin: 0 auto;
     text-align: center;
     padding: 40px 0 56px;

     @media screen and (min-width: 768px) {
    padding: 41px 2px 76px;
     }

     @media screen and (min-width: 1280px) {
    padding: 40px 0 65px;
     }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => `
     color: ${theme.PRIMARY_TEXT_COLOR};
     font-family: Montserrat, sans-serif;
     font-weight: 700;
     font-size: 18px;
     line-height: 30px;
     text-align: center;
     letter-spacing: 0.02em;
     border-bottom: 1px solid ${theme.PAGE_BORDER_COLOR};
     width: 130px;
     margin: 0 auto;
     padding-bottom: 10px;
     margin-bottom: 20px;

     @media screen and (min-width: 768px) {
       font-size: 22px;
       width: 322px;
       padding-bottom: 22px;
       margin-bottom: 39px;
     }
  `}
`;
