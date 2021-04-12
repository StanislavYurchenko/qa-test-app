import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainContainer, Header1, Header2, StyledImage, useStyles } from './ResultsPage.style';
import Chart from '../../components/Chart';
import TestResult from '../../components/TestResult';
import resultIMG from '../../images/results.svg';
import testActions from '../../redux/test/testActions';
import { fetchTest } from '../../redux/test/testOperations';
import categories from '../../utils/test-categories';

export default function ResultsView() {
  const classes = useStyles();
  const testCategory = useSelector(state => state.test.category);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleButtonClick = () => {
    dispatch(testActions.resetAnswers());
    dispatch(testActions.resetResults());
    history.push('/test');

    if (testCategory === categories.theory) dispatch(fetchTest('/test-theory'));
    else dispatch(fetchTest('/test-tech'));
  };

  return (
    <MainContainer>
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
