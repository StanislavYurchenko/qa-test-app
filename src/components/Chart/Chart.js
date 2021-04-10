import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { ChartContainer, PieContainer, AnswersContainer } from './Chart.style';
import { ACCENT_COLOUR, BAD_RESULT_COLOUR } from '../../themes/colors';

export default function Chart() {
  const correctAnswers = 10;
  const incorrectAnswers = 2;
  // const correctAnswers = useSelector(state => state.test.result.correct);
  // const incorrectAnswers = useSelector(state => state.test.result.wrong);
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
          backgroundColor: [ACCENT_COLOUR, BAD_RESULT_COLOUR],
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
