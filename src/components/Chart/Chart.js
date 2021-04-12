import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';

import { ChartContainer, PieContainer, AnswersContainer } from './Chart.style';
import { colorsLight } from '../../themes/colors';
import { getResult } from '../../redux/test/testSelectors';

function Chart({ correctAnswers, incorrectAnswers }) {
  const totalAnswers = correctAnswers + incorrectAnswers;

  const generateChartData = (correct, incorrect, total) => {
    return {
      labels: [
        `${Math.round((correct / total) * 100)}% Correct`,
        `${Math.round((incorrect / total) * 100)}% Incorrect`,
      ],
      datasets: [
        {
          label: 'Correct answers',
          data: [correct, incorrect],
          backgroundColor: [colorsLight.ACCENT_COLOR, colorsLight.BAD_RESULT_COLOR],
        },
      ],
    };
  };

  const generateChartOptions = () => {
    const calculateLegendPosition = () => {
      if (document.documentElement.clientWidth < 768) return 'bottom';
      else return 'right';
    };

    return {
      legend: {
        position: calculateLegendPosition(),
      },
      responsive: true,
      maintainAspectRatio: false,
    };
  };

  return (
    <ChartContainer>
      <PieContainer>
        <Pie
          data={generateChartData(correctAnswers, incorrectAnswers, totalAnswers)}
          options={generateChartOptions()}
        />
      </PieContainer>
      <AnswersContainer>
        <p>
          Correct answers - <span style={{ fontWeight: 'bold' }}>{`${correctAnswers}`}</span>
        </p>
        <p>
          Total questions - <span style={{ fontWeight: 'bold' }}>{`${totalAnswers}`}</span>
        </p>
      </AnswersContainer>
    </ChartContainer>
  );
}

const mapStateToProps = state => ({
  correctAnswers: getResult(state).correct,
  incorrectAnswers: getResult(state).wrong,
});

export default connect(mapStateToProps, null)(Chart);
