import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainContainer, Header1, Header2, StyledImage, useStyles } from './ResultsComponent.style';
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

  const handleButtonClick = () => {
    dispatch(testActions.resetAnswers());
    dispatch(testActions.resetResults());
    history.push('/test');
  };

  return (
    <MainContainer theme={customTheme}>
      <Header1>Results</Header1>
      <Header2>{testCategory}</Header2>
      <Chart />
      <StyledImage src={resultIMG} alt="cat result" />
      <TestResult />
      <Button className={classes.tryAgain} onClick={handleButtonClick}>
        Try again
      </Button>
    </MainContainer>
  );
}
