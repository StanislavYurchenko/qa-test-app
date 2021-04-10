import Button from '@material-ui/core/Button';

import { MainContainer, Header1, Header2, StyledImage, useStyles } from './ResultsPage.style';
import Chart from '../../components/Chart';
import TestResult from '../../components/TestResult';
import resultIMG from '../../images/results.svg';

export default function ResultsView() {
  const classes = useStyles();

  return (
    <MainContainer>
      <Header1>Results</Header1>
      <Header2>[ Testing theory_]</Header2>
      <Chart />
      <StyledImage src={resultIMG} alt="cat result" />
      <TestResult />
      <Button className={classes.tryAgain}>Try again</Button>
    </MainContainer>
  );
}
