import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';

const BACK_URL = 'https://qa-test-api-hakaton2021goit.herokuapp.com/auth/google';

const AuthPage = () => {
  return (
    <>
      <AuthText />
      <div>
        <p>You can use your Google Account to authorize:</p>
        <a href={BACK_URL}>Google</a>
        <p>Or login to our app using e-mail and password:</p>
        <AuthForm />
      </div>
    </>
  );
};

export default AuthPage;
