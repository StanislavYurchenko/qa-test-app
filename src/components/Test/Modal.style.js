import { Dialog, Button } from '@material-ui/core';

import styled from 'styled-components';

export const StyledDialog = styled(Dialog)``;
export const StyledBox = styled.div`
  ${({ theme }) => `
  padding: 20px 0;
  box-shadow: 0px 4px 15px ${theme.BOX_SHADOW_COLOR};
  background-color: ${theme.BAD_RESULT_COLOR};
  `}
`;

export const StyledDialogTitle = styled.h2`
  ${({ theme }) => `
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
  color: ${theme.PRIMARY_TEXT_COLOR};
  `}
`;

export const StyledText = styled.p`
  ${({ theme }) => `
  font-size: 16px;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 40px;
  color: ${theme.PRIMARY_TEXT_COLOR};
  `}
`;

export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  ${({ theme }) => `
  width: 120px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 20px;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow: 0px 4px 15px ${theme.BOX_SHADOW_COLOR};
  background-color: ${theme.SECONDARY_TEXT_COLOR};
  color: ${theme.PRIMARY_TEXT_COLOR};
  transition: all 0.2s linear;
   
   &:hover {
    background-color: ${theme.ACCENT_COLOR};
    color: ${theme.SECONDARY_TEXT_COLOR};
   }
  `}
`;
