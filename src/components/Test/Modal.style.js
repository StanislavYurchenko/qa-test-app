import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const StyledDialog = styled(Dialog)`
  padding: 50px;
`;
export const StyledBox = styled.div`
  ${'' /* padding: 20px; */}
`;

export const StyledDialogTitle = styled.h2`
  ${'' /* font-size: 20px; */}
  text-align: center;
  ${'' /* padding: 20px; */}
`;

export const StyledText = styled.p`
  ${'' /* font-size: 20px; */}
`;

export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledButton = styled(Button)`
  ${'' /* font-size: 20px; */}
`;
