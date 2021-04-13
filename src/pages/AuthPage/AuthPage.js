import { useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';

import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';
import { getTheme } from '../../redux/theme/themeSelectors';

import { Wrapper, FormСontainer, Text, GoogleButton, GoogleSvg } from './AuthPage.style';

const BACK_URL = 'https://qa-test-api-hakaton2021goit.herokuapp.com/auth/google';

const AuthPage = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  return (
    <Wrapper>
      <AuthText />
      <FormСontainer theme={customTheme}>
        <Text theme={customTheme}>You can use your Google Account to authorize:</Text>
        <GoogleButton href={BACK_URL} theme={customTheme}>
          <GoogleSvg />
          Google
        </GoogleButton>
        <Text theme={customTheme}>Or login to our app using e-mail and password:</Text>
        <AuthForm />
      </FormСontainer>
    </Wrapper>
  );
};

export default AuthPage;
