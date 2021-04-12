import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';

export default function Modal({ open, onCancel, onContinue }) {
  return (
    <Dialog open={open} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">Предупреждение!!!</DialogTitle>
      <DialogContent>
        <DialogContentText>Тест не закончен</DialogContentText>
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
  );
}
