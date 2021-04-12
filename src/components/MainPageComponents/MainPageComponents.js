import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import testActions from '../../redux/test/testActions';
import { Section, Title, SecondTitle, Text, Button, List } from './MainPageComponents.style';
import { ReactComponent as ArrowSvg } from '../../images/icons/arrow.svg';
import { useHistory } from 'react-router-dom';
import categories from '../../utils/test-categories';

function MainPageComponents() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };

  const handleClickTech = () => {
    dispatch(testActions.addCategory(categories.tech));
    history.push('/test');
  };
  const handleClickTheory = () => {
    dispatch(testActions.addCategory(categories.theory));
    history.push('/test');
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
            <Button onClick={handleClickTech}>
              QA technical training
              <ArrowSvg />
            </Button>
          </li>
          <li>
            <Button onClick={handleClickTheory} second>
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
