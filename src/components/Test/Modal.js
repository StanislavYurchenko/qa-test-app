import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: '20px',
    flexGrow: 1,
  },
}));

export default function Modal({ open, onCancel, onContinue }) {
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={open}
        // aria-labelledby="warning-dialog-title"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.title} id="warning-dialog-title">
          Warning!!!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>If you press exit, all progress will be lost</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Уйти
          </Button>
          <Button onClick={onContinue} color="primary">
            Продолжить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
