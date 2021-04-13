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
  font-size: 30px;
  padding: 50px;
`;

export const StyledDialogTitle = styled.div`
  font-size: 50px;
`;

export const StyledBox = styled.div`
  padding: 50px;
`;

export const StyledButton = styled(Button)`
  font-size: 30px;
`;
