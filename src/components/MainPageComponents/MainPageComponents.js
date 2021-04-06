import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import { Paper, Container, Typography } from '@material-ui/core';

function MainPageComponents() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };
  return (
    <main className="main">
      <h1>
        “Regression testing. What is it? If the system compiles, that's good, if it boots, that's
        great!”
      </h1>
    </main>
  );
}

export default MainPageComponents;
