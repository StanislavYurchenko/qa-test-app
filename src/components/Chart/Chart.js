import { Pie } from 'react-chartjs-2';
import { PieContainer, AnswersContainer } from './Chart.SC';
import { ACCENT_COLOUR, BAD_RESULT_COLOUR } from '../../themes/colors';

const correctAnswers = 10;
const incorrectAnswers = 2;
const totalAnswers = correctAnswers + incorrectAnswers;

const data = {
  labels: [
    `${Math.round((correctAnswers / totalAnswers) * 100)}% Correct`,
    `${Math.round((incorrectAnswers / totalAnswers) * 100)}% Incorrect`,
  ],
  datasets: [
    {
      label: 'Correct answers',
      data: [correctAnswers, incorrectAnswers],
      backgroundColor: [ACCENT_COLOUR, BAD_RESULT_COLOUR],
    },
  ],
};

const options = {
  legend: {
    position: 'right',
  },
  responsive: true,
  maintainAspectRatio: false,
};

export default function ChartView() {
  return (
    <div style={{ marginBottom: '30px' }}>
      <PieContainer>
        <Pie data={data} options={options} />
      </PieContainer>
      <AnswersContainer>
        <p style={{ marginRight: '40px' }}>{`Correct answers - ${correctAnswers}`}</p>
        <p>{`Total questions - ${totalAnswers}`}</p>
      </AnswersContainer>
    </div>
  );
}
