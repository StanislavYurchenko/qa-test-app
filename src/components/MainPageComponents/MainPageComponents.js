import { useDispatch } from 'react-redux';
import testActions from '../../redux/test/testActions';
import {
  Section,
  Title,
  SecondTitle,
  Text,
  Button,
  List,
  StyledSpan,
  StyledArrowSvg,
} from './MainPageComponents.style';

import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

function MainPageComponents() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const logOut = () => {
    dispatch(logoutUser());
  };
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const handleClickTech = () => {
    dispatch(testActions.addCategory('[Техническое тестирования_]'));
    history.push('/test');
  };
  const handleClickTheory = () => {
    dispatch(testActions.addCategory('[Теория тестирования_]'));
    history.push('/test');
  };
  const text = 'menuHome';
  return (
    <main>
      <Section theme={customTheme}>
        <Title theme={customTheme}>
          <StyledSpan>{t('quote')}</StyledSpan>
          {t('quote-next')}
        </Title>
        <SecondTitle theme={customTheme}>{t('author')}</SecondTitle>
        <Text theme={customTheme}>{t('authorPosition')}</Text>
        <List>
          <li>
            <Button onClick={handleClickTech} theme={customTheme}>
              {t('qaTechnicalTraining')}
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </li>
          <li>
            <Button onClick={handleClickTheory} theme={customTheme} second>
              {t('testingTheory')}
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </li>
        </List>
      </Section>
    </main>
  );
}

export default MainPageComponents;
