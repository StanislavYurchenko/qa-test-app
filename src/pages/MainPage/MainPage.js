import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';

const MainPage = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default MainPage;
