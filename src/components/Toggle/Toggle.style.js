import styled from 'styled-components';

export const ToggleContainer = styled.button`
  ${({ theme }) => `
    background-color: ${theme.TOGGLE_BACKGROUND_COLOR};
    position: absolute;
    bottom: -30px;
    right: 12px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.3rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    width: 4rem;
    height: 2rem;
    outline: none;
    border: none;
    padding: 2px 4px;
  `}

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
      fill: #ff6b09;
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
