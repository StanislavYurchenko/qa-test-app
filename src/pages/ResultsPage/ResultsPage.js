import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import { MainContainer, Header1, Header2, StyledImage, useStyles } from './ResultsPage.style';
import Chart from '../../components/Chart';
import TestResult from '../../components/TestResult';
import resultIMG from '../../images/results.svg';

export default function ResultsView() {
  const classes = useStyles();
  const testCategory = useSelector(state => state.test.category);

  return (
    <MainContainer>
      <Header1>Results</Header1>
      <Header2>{testCategory}</Header2>
      <Chart />
      <StyledImage src={resultIMG} alt="cat result" />
      <TestResult />
      <Button className={classes.tryAgain}>Try again</Button>
    </MainContainer>
  );
}
