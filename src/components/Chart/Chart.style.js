import styled from 'styled-components';
import BREAKPOINTS from '../../utils/breakpoints';

const ChartContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    margin: 0px 0px 30px 140px;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-bottom: 25px;
  }
`;

const PieContainer = styled.div`
  margin-bottom: 20px;
  min-width: 230px;
  height: 210px;

  // @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}) {
  //   min-width: 230px;
  //   height: 210px;
  // }

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    min-width: 505px;
    height: 285px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    min-width: 575px;
    margin-bottom: 25px;
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 220px;
  margin-left: 38px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    max-width: 362px;
    margin-left: 0px;

    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-left: 28px;
  }
`;

const StyledSpan = styled.span`
  ${({ theme }) => `
    display: flex;

    &:after {
      content: '';
      width: 1px;
      height: 10px;
      
      background-color: ${theme.PAGE_BORDER_COLOR};

      @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
        height: 20px;
        }
      }
   `}
`;

export { ChartContainer, PieContainer, AnswersContainer, StyledSpan };
