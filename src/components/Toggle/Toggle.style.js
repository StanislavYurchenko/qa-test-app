import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: absolute;
  bottom: -20px;
  right: 20px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.2rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.15rem;
  width: 4rem;
  height: 2rem;
  outline: none;

  svg {
    height: auto;
    width: 1.3rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
