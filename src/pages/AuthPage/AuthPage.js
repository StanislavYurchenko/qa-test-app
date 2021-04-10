import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';

import { Wrapper, FormСontainer, Text, GoogleButton } from './AuthPage.style';

const BACK_URL = 'https://qa-test-api-hakaton2021goit.herokuapp.com/auth/google';

const AuthPage = () => {
  return (
    <Wrapper>
      <AuthText />
      <FormСontainer>
        <Text>You can use your Google Account to authorize:</Text>
        <GoogleButton>
          <a href={BACK_URL}>Google</a>
        </GoogleButton>
        <Text>Or login to our app using e-mail and password:</Text>
        <AuthForm />
      </FormСontainer>
    </Wrapper>
  );
};

export default AuthPage;
