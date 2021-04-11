import { useState } from 'react';

import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';

import { AuthFormWrapper } from './AuthForm.style';

const AuthForm = () => {
  const [toggleButton, setToggleButton] = useState('login');

  const handleToggleButton = () => {
    toggleButton === 'login' ? setToggleButton('reg') : setToggleButton('login');
  };

  return (
    <AuthFormWrapper>
      {toggleButton === 'login' && <LoginForm handleToggleButton={handleToggleButton} />}
      {toggleButton === 'reg' && <RegisterForm handleToggleButton={handleToggleButton} />}
    </AuthFormWrapper>
  );
};

export default AuthForm;
