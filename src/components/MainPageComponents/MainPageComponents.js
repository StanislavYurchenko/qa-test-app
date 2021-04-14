import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import testActions from '../../redux/test/testActions';
import { Section, Title, SecondTitle, Text, Button, List } from './MainPageComponents.style';
import { ReactComponent as ArrowSvg } from '../../images/icons/arrow.svg';
import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import common_ru from '../../lang/en.json';

function MainPageComponents() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { t } = useTranslation(['translation', 'common_ru']);

  const logOut = () => {
    dispatch(logoutUser());
  };

  const handleClickTech = () => {
    dispatch(testActions.addCategory('[Техническое тестирования_]'));
    history.push('/test');
  };
  const handleClickTheory = () => {
    dispatch(testActions.addCategory('[Теория тестирования_]'));
    history.push('/test');
  };

  return (
    <main>
      <Section>
        <Title>
          {t('quote')}
          {/* “Regression testing. What is it? If the system compiles, that's good, if it boots, that's
          great!” */}
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
