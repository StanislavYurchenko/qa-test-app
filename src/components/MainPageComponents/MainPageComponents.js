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

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

function MainPageComponents() {
  const history = useHistory();
  const dispatch = useDispatch();
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

  return (
    <main>
      <Section theme={customTheme}>
        <Title theme={customTheme}>
          <StyledSpan>“Regression testing. What is it?</StyledSpan> If the system compiles, that's
          good, if it boots, that's great!”
        </Title>
        <SecondTitle theme={customTheme}>Linus Torvalds</SecondTitle>
        <Text theme={customTheme}>Linux kernel creator, hacker, 1969</Text>
        <List>
          <li>
            <Button onClick={handleClickTech} theme={customTheme}>
              QA technical training
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </li>
          <li>
            <Button onClick={handleClickTheory} theme={customTheme} second>
              Testing theory
              <StyledArrowSvg theme={customTheme} />
            </Button>
          </li>
        </List>
      </Section>
    </main>
  );
}

export default MainPageComponents;
