import { useState } from 'react';

import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';

const AuthForm = () => {
  const [toggleButton, setToggleButton] = useState('login');

  const handleToggleButton = () => {
    toggleButton === 'login' ? setToggleButton('reg') : setToggleButton('login');
  };

  return (
    <>
      {toggleButton === 'login' && <LoginForm handleToggleButton={handleToggleButton} />}
      {toggleButton === 'reg' && <RegisterForm handleToggleButton={handleToggleButton} />}
    </>
  );
};

export default AuthForm;
