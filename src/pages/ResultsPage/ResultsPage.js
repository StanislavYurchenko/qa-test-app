import { ReactSVG } from 'react-svg';
import Button from '@material-ui/core/Button';

import { MainContainer, Header1, Header2, useStyles } from './ResultsPage.style';
import Chart from '../../components/Chart';
import TestResult from '../../components/TestResult';

export default function ResultsView() {
  const classes = useStyles();

  return (
    <MainContainer>
      <Header1>Results</Header1>
      <Header2>[ Testing theory_]</Header2>
      <Chart />
      <ReactSVG src={'img/results.svg'} style={{ marginBottom: '10px' }} />
      <TestResult />
      <Button className={classes.tryAgain}>Try again</Button>
    </MainContainer>
  );
}
