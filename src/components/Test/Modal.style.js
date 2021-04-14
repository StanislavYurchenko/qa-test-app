import { Dialog, Button } from '@material-ui/core';

import styled from 'styled-components';

export const StyledDialog = styled(Dialog)``;
export const StyledBox = styled.div`
  ${({ theme }) => `
  padding: 20px;
  background-color: ${theme.SECONDARY_TEXT_COLOR};
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
  text-align:
  center;margin-bottom: 40px;
  color: ${theme.PRIMARY_TEXT_COLOR};
  `}
`;

export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  ${({ theme }) => `
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 20px;
  background-color: ${theme.BOX_SHADOW_COLOR};
  color: ${theme.PRIMARY_TEXT_COLOR};
   
  `}
`;
