import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import s from './Card.module.css';
import { CardBox, Counter, Page, Question, StyledFormControlLabel, StyledRG } from './Card.style';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';
// import styled from 'styled-components';

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  // const [value, setValue] = useState('');
  const { question, answers, questionId } = questions[activeCard - 1];
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const handleChange = e => {
    // setValue(e.target.value);
    handleAnswer({ [questionId]: e.target.value });
  };

  return (
    // <div className={s.card}>
    //   <p className={s.counter}>
    //     Вопрос <span className={s.page}>{activeCard}</span>/
    //     <span className={s.pages}>{questions.length}</span>
    //   </p>
    //   <h2 className={s.question}>{question}</h2>

    //   <StyledRG name="question" value={answered[questionId] || ''} onChange={handleChange}>
    //     {answers.map((answer, i) => (
    //       <StyledFormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
    //     ))}
    //   </StyledRG>
    // </div>
    <CardBox theme={customTheme}>
      <Counter theme={customTheme}>
        Question <Page theme={customTheme}>{activeCard}</Page> / {questions.length}
      </Counter>
      <Question theme={customTheme}>{question}</Question>
      <StyledRG
        name="question"
        theme={customTheme}
        value={answered[questionId] || ''}
        onChange={handleChange}
      >
        {answers.map((answer, i) => (
          <StyledFormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
        ))}
      </StyledRG>
    </CardBox>
  );
}
