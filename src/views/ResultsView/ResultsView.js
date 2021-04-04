import { ReactSVG } from 'react-svg';
import { MainContainer, Header1, Header2 } from './ResultsView.SC';
import ChartView from '../ChartView/ChartView';

export default function ResultsView() {
  return (
    <MainContainer>
      <Header1>Results</Header1>

      <Header2>[ Testing theory_]</Header2>

      <ChartView />

      <ReactSVG src={'img/results.svg'} style={{ marginBottom: '10px' }} />
    </MainContainer>
  );
}
