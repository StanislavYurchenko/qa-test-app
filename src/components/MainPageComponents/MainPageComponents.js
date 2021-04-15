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
  Item,
} from './MainPageComponents.style';

import { useHistory } from 'react-router-dom';
import categories from '../../utils/test-categories';

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
    dispatch(testActions.addCategory(categories.tech));
    history.push('/test');
  };
  const handleClickTheory = () => {
    dispatch(testActions.addCategory(categories.theory));
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
          <Item>
            <Button onClick={handleClickTech} theme={customTheme}>
              {t('qaTechnicalTraining')}
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </Item>
          <Item>
            <Button onClick={handleClickTheory} theme={customTheme} second>
              {t('testingTheory')}
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </Item>
        </List>
      </Section>
    </main>
  );
}

export default MainPageComponents;
