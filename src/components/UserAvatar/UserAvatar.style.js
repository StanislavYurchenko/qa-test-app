import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: -22px;
  left: 21px;
  width: 100px;
  height: 100px;
  & > input {
    display: none;
  }
`;

const AppBlock = styled.div`
  left: 18px;
  width: 50px;
  height: 50px;
  border: 2px solid #636377;
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
export { AppBlock, Avatar, LoaderWrapper };
