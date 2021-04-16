import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createMuiTheme } from '@material-ui/core/styles';

import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';
import { getTheme } from '../../redux/theme/themeSelectors';

import { Wrapper, FormСontainer, Text, GoogleButton, GoogleSvg } from './AuthPage.style';

const BACK_URL = 'https://qa-test-api-hakaton2021goit.herokuapp.com/auth/google';

const AuthPage = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <AuthText />
      <FormСontainer theme={customTheme}>
        <Text theme={customTheme}>{t('login__loginGoogleDescription')}</Text>
        <GoogleButton href={BACK_URL} theme={customTheme}>
          <GoogleSvg />
          Google
        </GoogleButton>
        <Text theme={customTheme}>{t('login__loginEmailDescription')}</Text>
        <AuthForm />
      </FormСontainer>
    </Wrapper>
  );
};

export default AuthPage;
