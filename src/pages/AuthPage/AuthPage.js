import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';

import {
  Wrapper,
  FormСontainer,
  Text,
  GoogleButton,
  GoogleSvg,
  GoogleLink,
} from './AuthPage.style';

const BACK_URL = 'https://qa-test-api-hakaton2021goit.herokuapp.com/auth/google';

const AuthPage = () => {
  return (
    <Wrapper>
      <AuthText />
      <FormСontainer>
        <Text>You can use your Google Account to authorize:</Text>
        <GoogleButton href={BACK_URL}>
          <GoogleSvg />
          Google
        </GoogleButton>
        <Text>Or login to our app using e-mail and password:</Text>
        <AuthForm />
      </FormСontainer>
    </Wrapper>
  );
};

export default AuthPage;
