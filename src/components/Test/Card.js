import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import s from './Card.module.css';

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  const [value, setValue] = useState('');

  const { question, answers, questionId } = questions[activeCard];
  useEffect(() => {}, []);

  const handleChange = e => {
    setValue(e.target.value);
    handleAnswer({ [questionId]: e.target.value });
  };

  return (
    <div className={s.card}>
      <p className={s.counter}>
        Вопрос {activeCard + 1} / {questions.length}
      </p>
      <h2 className={s.question}>{question}</h2>

      <RadioGroup name="question" value={answered[questionId] || ''} onChange={handleChange}>
        {answers.map((answer, i) => (
          <FormControlLabel
            className={s.answer}
            key={i}
            value={answer}
            control={<Radio />}
            label={answer}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
