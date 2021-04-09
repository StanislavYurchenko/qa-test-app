import styled from 'styled-components';
import BREAKPOINTS from '../../utils/breakpoints';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f5f6fb;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    padding-top: 80px;
    padding-bottom: 110px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding-top: 114px;
    padding-bottom: 114px;
  }
`;

export const Title = styled.h1`
  position: relative;
  margin-bottom: 60px;
  text-align: center;
  font-size: 12px;
  line-height: 1.66;
  font-weight: 700;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 560px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 45px;
    font-size: 22px;
    line-height: 1.36;
  }

  &::after {
    content: '';
    position: absolute;
    left: 25%;
    top: 160%;
    display: block;
    width: 130px;
    height: 1px;
    opacity: 0.15;
    border-radius: 2px;
    background-color: #00122f;

    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
      width: 320px;
      left: 20%;
      top: 132%;
    }
  }
`;

export const SecondTitle = styled.h2`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 18px;
    line-height: 2;
    margin-bottom: 0px;
  }
`;

export const Text = styled(SecondTitle)`
  margin-bottom: 40px;
  color: #555555;
  font-size: 10px;
  line-heigth: 1.2;
  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    font-size: 14px;
    line-height: 2.57;
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-bottom: 85px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 212px;
  margin-bottom: ${props => (props.second ? '0px' : '20px')};
  padding-top: 60px;
  padding-right: 50px;
  padding-bottom: 42px;
  padding-left: 50px;
  background-color: ${props => (props.second ? '#FF6B01' : '#02172a')};
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: #fff;
  font-size: 24px;
  line-height: 1.22;
  letter-spacing: 0.03em;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(18, 29, 46, 0.15);

  @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 400px;
    padding-right: 80px;
    padding-left: 80px;
    padding-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${props => (props.second ? '0px' : '30px')};
    font-size: ${props => (props.second ? '30px' : '32px')};
    line-height: 1.22;
  }
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-bottom: 0;
    margin-right: ${props => (props.second ? '0px' : '20px')};
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    display: flex;
    justify-content: center;
  }
`;
