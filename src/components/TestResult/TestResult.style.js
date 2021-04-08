import styled from 'styled-components';

const ResultContainer = styled.div`
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 47px;
  }
`;

const HeadingParagraph = styled.p`
  margin-bottom: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.87;
  text-align: center;
  letter-spacing: 0.02em;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.36;
  }
`;

const DescriptionParagraph = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.02em;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export { ResultContainer, HeadingParagraph, DescriptionParagraph };
