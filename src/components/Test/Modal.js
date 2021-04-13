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

import { StyledDialog, StyledDialogTitle, StyledBox, StyledButton } from './Modal.style';

// const useStyles = makeStyles(theme => ({
//   root: {},
//   title: {
//     fontSize: '20px',
//     flexGrow: 1,
//   },
// }));

export default function Modal({ open, onCancel, onContinue }) {
  // const classes = useStyles();
  return (
    <>
      <StyledDialog
        open={open}
        // aria-labelledby="warning-dialog-title"
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <StyledBox>
          <StyledDialogTitle>Warning!!!</StyledDialogTitle>
          <DialogContent>
            <DialogContentText>If you press exit, all progress will be lost</DialogContentText>
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={onCancel} color="primary">
              Уйти
            </StyledButton>
            <StyledButton onClick={onContinue} color="primary">
              Продолжить
            </StyledButton>
          </DialogActions>
        </StyledBox>
      </StyledDialog>
    </>
  );
}
