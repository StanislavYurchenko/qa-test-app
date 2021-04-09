import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import { Section, Title, SecondTitle, Text, Button, List } from './MainPageComponents.style';
import { ReactComponent as ArrowSvg } from '../../images/icons/arrow.svg';

function MainPageComponents() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };
  return (
    <main>
      <Section>
        <Title>
          “Regression testing. What is it? If the system compiles, that's good, if it boots, that's
          great!”
        </Title>
        <SecondTitle>Linus Torvalds</SecondTitle>
        <Text>Linux kernel creator, hacker, 1969</Text>
        <List>
          <li>
            <Button>
              QA technical training
              <ArrowSvg />
            </Button>
          </li>
          <li>
            <Button second>
              Testing theory
              <ArrowSvg />
            </Button>
          </li>
        </List>
      </Section>
    </main>
  );
}

export default MainPageComponents;
