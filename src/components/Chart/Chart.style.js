import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const PieContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    min-width: 230px;
    height: 210px;
  }

  @media screen and (min-width: 768px) {
    min-width: 505px;
    height: 285px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 575px;
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  // margin-left: 50px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

const AnswerParagraph = styled.p`
  margin-right: 20px;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 40px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export { ChartContainer, PieContainer, AnswersContainer, AnswerParagraph };
