import { useSelector } from 'react-redux';
// import Radio from '@material-ui/core/Radio';
import { createMuiTheme } from '@material-ui/core/styles';

import { getTheme } from '../../redux/theme/themeSelectors';
import {
  CardBox,
  Counter,
  Page,
  Question,
  StyledFormControlLabel,
  StyledRG,
  StyledRadio,
} from './Card.style';

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  const { question, answers, questionId } = questions[activeCard - 1];
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const handleChange = e => {
    handleAnswer({ [questionId]: e.target.value });
  };

  return (
    <CardBox theme={customTheme}>
      <Counter theme={customTheme}>
        Question <Page theme={customTheme}>{activeCard}</Page> / {questions.length}
      </Counter>
      <Question theme={customTheme}>{question}</Question>
      <StyledRG
        name="question"
        value={answered[questionId] || ''}
        onChange={handleChange}
        theme={customTheme}
      >
        {answers.map((answer, i) => (
          <StyledFormControlLabel
            key={i}
            value={answer}
            control={<StyledRadio />}
            label={answer}
            theme={customTheme}
          />
        ))}
      </StyledRG>
    </CardBox>
  );
}
