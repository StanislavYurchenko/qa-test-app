import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import s from './Card.module.css';
import { CardBox, Counter, Page, Question, StyledFormControlLabel, StyledRG } from './Card.style';
// import styled from 'styled-components';

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  // const [value, setValue] = useState('');
  const { question, answers, questionId } = questions[activeCard - 1];

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
    <CardBox>
      <Counter>
        Question <Page>{activeCard}</Page> / {questions.length}
      </Counter>
      <Question>{question}</Question>
      <StyledRG name="question" value={answered[questionId] || ''} onChange={handleChange}>
        {answers.map((answer, i) => (
          <StyledFormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
        ))}
      </StyledRG>
    </CardBox>
  );
}
