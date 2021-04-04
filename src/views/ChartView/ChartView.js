import { Pie } from 'react-chartjs-2';
import { PieContainer, AnswersContainer } from './ChartView.SC';

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
      backgroundColor: ['rgba(255, 107, 9, 1)', 'rgba(215, 215, 215, 1)'],
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
