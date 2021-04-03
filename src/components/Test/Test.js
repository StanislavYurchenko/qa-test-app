import { useState } from 'react';
import PreviousNextMethods from './Slider';
import { techTestQA, teoryTest } from './data';

export default function Test({ title }) {
  const [answers, setAnswers] = useState({});
  //   console.log(`answers`, answers);
  //   console.log('длина', Object.keys(answers).length);

  const handleAnswer = targerAnswer => {
    setAnswers({ ...answers, ...targerAnswer });
  };
  return (
    <>
      <h2>{title ? title : '[Теория тестирования_]'}</h2>
      <PreviousNextMethods handleAnswer={handleAnswer} />
    </>
  );
}
