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

import {
  StyledDialog,
  StyledDialogTitle,
  StyledBox,
  StyledButton,
  StyledButtonBox,
  StyledText,
} from './Modal.style';

// const useStyles = makeStyles(theme => ({
//   root: {},
//   title: {
//     fontSize: '20px',
//     flexGrow: 1,
//   },
// }));

export default function Modal({ open, onClose, onCancel, onContinue }) {
  // const classes = useStyles();
  return (
    <>
      <StyledDialog open={open}>
        <StyledBox>
          <StyledDialogTitle>Warning!!!</StyledDialogTitle>
          <StyledText>If you press exit, all progress will be lost</StyledText>

          <StyledButtonBox>
            <StyledButton onClick={onCancel} color="primary">
              Exit
            </StyledButton>
            <StyledButton onClick={onContinue} color="primary">
              Continue
            </StyledButton>
          </StyledButtonBox>
        </StyledBox>
      </StyledDialog>
    </>
  );
}
