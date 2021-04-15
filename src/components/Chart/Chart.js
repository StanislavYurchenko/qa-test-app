import { Pie } from 'react-chartjs-2';
import { connect, useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { ChartContainer, PieContainer, AnswersContainer, StyledSpan } from './Chart.style';
import { getResult } from '../../redux/test/testSelectors';
import { getTheme } from '../../redux/theme/themeSelectors';

function Chart({ correctAnswers, incorrectAnswers }) {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const totalAnswers = correctAnswers + incorrectAnswers;

  const generateChartData = (theme, correct, incorrect) => {
    const total = correct + incorrect;

    return {
      labels: [
        `${Math.round((correct / total) * 100)}% Correct`,
        `${Math.round((incorrect / total) * 100)}% Incorrect`,
      ],
      datasets: [
        {
          label: 'Correct answers',
          data: [correct, incorrect],
          backgroundColor: [theme.ACCENT_COLOR, theme.BAD_RESULT_COLOR],
        },
      ],
    };
  };

  const generateChartOptions = theme => {
    const generateLegend = () => {
      if (document.documentElement.clientWidth < 768) {
        return {
          position: 'bottom',
          labels: {
            fontColor: theme.PRIMARY_TEXT_COLOR,
            fontSize: 10,
            fontWeight: 500,
          },
        };
      } else {
        return {
          position: 'right',
          labels: {
            fontColor: theme.PRIMARY_TEXT_COLOR,
            fontSize: 16,
            fontWeight: 500,
          },
        };
      }
    };

    return {
      legend: generateLegend(),
      responsive: true,
      maintainAspectRatio: false,
    };
  };

  return (
    <>
      {totalAnswers > 0 && (
        <ChartContainer>
          <PieContainer>
            <Pie
              data={generateChartData(customTheme, correctAnswers, incorrectAnswers)}
              options={generateChartOptions(customTheme)}
            />
          </PieContainer>
          <AnswersContainer>
            <p>
              Correct answers - <span style={{ fontWeight: 'bold' }}>{`${correctAnswers}`}</span>
            </p>
            <StyledSpan theme={customTheme} />
            <p>
              Total questions - <span style={{ fontWeight: 'bold' }}>{`${totalAnswers}`}</span>
            </p>
          </AnswersContainer>
        </ChartContainer>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  correctAnswers: getResult(state).correct,
  incorrectAnswers: getResult(state).wrong,
});

Chart.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Chart);
