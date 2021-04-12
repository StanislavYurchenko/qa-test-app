import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  border-radius: 0;
  margin: 0 auto;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);
  width: 280px;
  padding: 0;
  position: relative;

  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
    margin: 0;

    &:nth-child(odd) {
      margin-right: 20px;
    }

    &:nth-last-child(-n + 2) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 295px;
    margin-right: 20px;

    &:nth-child(4n) {
      margin-right: 0px;
    }

    &:nth-last-child(-n + 2) {
      margin-right: 20px;
    }

     &:nth-last-child(2) {
      margin-left: 16px;
    }
    }
  }
`;
