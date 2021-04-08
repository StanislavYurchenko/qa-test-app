import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import { Section, Title } from './MainPageComponents.style';

function MainPageComponents() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };
  return (
    <main className="main">
      <Section>
        <Title>
          “Regression testing. What is it? If the system compiles, that's good, if it boots, that's
          great!”
        </Title>
      </Section>
    </main>
  );
}

export default MainPageComponents;
