import AuthForm from '../../components/AuthForm';
import AuthText from '../../components/AuthText';

const AuthPage = () => {
  return (
    <>
      <AuthText />
      <div>
        <p>You can use your Google Account to authorize:</p>
        <button type="button">Google</button>
        <p>Or login to our app using e-mail and password:</p>
        <AuthForm />
      </div>
    </>
  );
};

export default AuthPage;
