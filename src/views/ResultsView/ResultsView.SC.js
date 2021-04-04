import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header1 = styled.h1`
  margin: 0px 0px 10px;
`;

const Header2 = styled.h2`
  margin: 0px 0px 70px;
`;

const PieContainer = styled.div`
  width: 510px;
  height: 290px;
  margin-bottom: 30px;
`;

const AnswersContainer = styled.div`
  margin-bottom: 30px;
`;

export { MainContainer, Header1, Header2, PieContainer, AnswersContainer };
