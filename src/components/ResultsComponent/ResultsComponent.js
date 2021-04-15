import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  MainContainer,
  HeadersContainer,
  Header1,
  Header2,
  StyledImage,
  useStyles,
} from './ResultsComponent.style';
import Chart from '../Chart';
import TestResult from '../TestResult';
import resultIMG from '../../images/results.svg';
import testActions from '../../redux/test/testActions';
import { getTheme } from '../../redux/theme/themeSelectors';

export default function ResultsComponent() {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const classes = useStyles(customTheme);
  const testCategory = useSelector(state => state.test.category);
  const dispatch = useDispatch();
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const handleButtonClick = () => {
    dispatch(testActions.resetAnswers());
    dispatch(testActions.resetResults());
    history.push('/test');
  };

  return (
    <MainContainer theme={customTheme}>
      <HeadersContainer theme={customTheme}>
        <Header1>{t('results__title')}</Header1>
        <Header2>{testCategory}</Header2>
      </HeadersContainer>
      <Chart />
      <StyledImage src={resultIMG} alt="cat result" />
      <TestResult />
      <Button className={classes.tryAgain} onClick={handleButtonClick}>
        {t('results__button')}
      </Button>
    </MainContainer>
  );
}
