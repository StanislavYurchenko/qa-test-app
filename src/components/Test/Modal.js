import { useTranslation } from 'react-i18next';
import {
  StyledDialog,
  StyledDialogTitle,
  StyledBox,
  StyledButton,
  StyledButtonBox,
  StyledText,
} from './Modal.style';

export default function Modal({ open, theme, onCancel, onContinue }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <StyledDialog open={open} theme={theme}>
        <StyledBox theme={theme}>
          <StyledDialogTitle theme={theme}>{t('modal__title')}!!!</StyledDialogTitle>
          <StyledText theme={theme}>{t('modal__description')}</StyledText>

          <StyledButtonBox theme={theme}>
            <StyledButton onClick={onCancel} color="primary" theme={theme}>
              {t('modal__exit')}
            </StyledButton>
            <StyledButton onClick={onContinue} color="primary" theme={theme}>
              {t('modal__continue')}
            </StyledButton>
          </StyledButtonBox>
        </StyledBox>
      </StyledDialog>
    </>
  );
}
