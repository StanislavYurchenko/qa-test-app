import { Pie } from 'react-chartjs-2';
import { ChartContainer, PieContainer, AnswersContainer, AnswerParagraph } from './Chart.style';
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

const calculateLegendPosition = () => {
  if (document.documentElement.clientWidth < 768) return 'bottom';
  else return 'right';
};

const options = {
  legend: {
    position: calculateLegendPosition(),
  },
  responsive: true,
  maintainAspectRatio: false,
};

export default function Chart() {
  return (
    <ChartContainer>
      <PieContainer>
        <Pie data={data} options={options} />
      </PieContainer>
      <AnswersContainer>
        <AnswerParagraph>
          Correct answers - <span style={{ fontWeight: 'bold' }}>{`${correctAnswers}`}</span>
        </AnswerParagraph>
        <p>
          Total questions - <span style={{ fontWeight: 'bold' }}>{`${totalAnswers}`}</span>
        </p>
      </AnswersContainer>
    </ChartContainer>
  );
}
