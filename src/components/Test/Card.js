import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import s from './Card.module.css';
// import { CardBox, Counter, Page, Question, StyledFormControlLabel, StyledRG } from './Card.style';
import styled from 'styled-components';

const StyledFormControlLabel = styled(FormControlLabel)`
  span + span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #000000;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
const StyledRG = styled(RadioGroup)`
  font-size: 30px;
  color: #121212;
`;

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  const [value, setValue] = useState('');
  const { question, answers, questionId } = questions[activeCard - 1];

  const handleChange = e => {
    setValue(e.target.value);
    handleAnswer({ [questionId]: e.target.value });
  };

  return (
    <div className={s.card}>
      <p className={s.counter}>
        Вопрос <span className={s.page}>{activeCard}</span>/
        <span className={s.pages}>{questions.length}</span>
      </p>
      <h2 className={s.question}>{question}</h2>

      <StyledRG name="question" value={answered[questionId] || ''} onChange={handleChange}>
        {answers.map((answer, i) => (
          <StyledFormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
        ))}
      </StyledRG>
    </div>
    // <CardBox>
    //   <Counter>
    //     Вопрос <Page>{activeCard}</Page> / <span className={s.pages}>{questions.length}</span>
    //   </Counter>
    //   <Question>{question}</Question>
    //   <StyledRG name="question" value={answered[questionId] || ''} onChange={handleChange}>
    //     {answers.map((answer, i) => (
    //       <StyledFormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
    //     ))}
    //   </StyledRG>
    // </CardBox>
  );
}
