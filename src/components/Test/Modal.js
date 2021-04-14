import {
  StyledDialog,
  StyledDialogTitle,
  StyledBox,
  StyledButton,
  StyledButtonBox,
  StyledText,
} from './Modal.style';

export default function Modal({ open, theme, onClose, onCancel, onContinue }) {
  return (
    <>
      <StyledDialog open={open} theme={theme}>
        <StyledBox theme={theme}>
          <StyledDialogTitle theme={theme}>Warning!!!</StyledDialogTitle>
          <StyledText>If you press exit, all progress will be lost</StyledText>

          <StyledButtonBox theme={theme}>
            <StyledButton onClick={onCancel} color="primary" theme={theme}>
              Exit
            </StyledButton>
            <StyledButton onClick={onContinue} color="primary" theme={theme}>
              Continue
            </StyledButton>
          </StyledButtonBox>
        </StyledBox>
      </StyledDialog>
    </>
  );
}
