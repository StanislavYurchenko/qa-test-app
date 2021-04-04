import { useState, useEffect } from 'react';
import Card from './Card';
import { techTestQA, teoryTest } from './data';
import s from './Test.module.css';
import styled from 'styled-components';
import { ReactComponent as PrevSvg } from '../../images/prev.svg';
import { ReactComponent as NextSvg } from '../../images/next.svg';

export default function Test({ title }) {
  const [answers, setAnswers] = useState({});
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {}, []);

  const handlePrev = () => {
    setActiveCard(activeCard - 1);
  };

  const handleNext = () => {
    setActiveCard(activeCard + 1);
  };

  const handleAnswer = targerAnswer => {
    setAnswers({ ...answers, ...targerAnswer });
  };

  const handleMainButton = () => {};

  return (
    <>
      <section className={s.section}>
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : '[Теория тестирования_]'}</h2>
          <button className={s.aboveButton} type="button" onClick={handleMainButton}>
            Завершить тест
          </button>
        </div>
        <Card
          questions={techTestQA}
          activeCard={activeCard}
          handleAnswer={handleAnswer}
          answered={answers}
        />
        <div className={s.buttons}>
          <button
            className={s.btn}
            type="button"
            onClick={handlePrev}
            disabled={activeCard - 1 < 0}
          >
            <PrevSvg />
            <span>Предыдущий вопрос</span>
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNext}
            disabled={activeCard + 1 === techTestQA.length}
          >
            <span>Следующий вопрос</span>
            <NextSvg />
          </button>
        </div>
      </section>
    </>
  );
}
