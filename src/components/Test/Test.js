import { useState, useEffect } from 'react';
import Card from './Card';
import { techTestQA, teoryTest } from './data';
import s from './Test.module.css';

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
            <svg
              className={s.iconBtn}
              width="24"
              height="16"
              viewBox="0 0 24 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.146485 8.35362L7.64648 15.8536C7.84181 16.049 8.15822 16.049 8.3535 15.8536C8.54883 15.6583 8.54883 15.3419 8.3535 15.1466L1.707 8.50011L23.5 8.50011C23.7764 8.50011 24 8.27647 24 8.00009C24 7.72372 23.7764 7.50008 23.5 7.50008L1.707 7.50008L8.3535 0.853625C8.54883 0.658297 8.54883 0.341892 8.3535 0.146611C8.25586 0.0489698 8.12789 0.000126405 7.99997 0.000126394C7.87205 0.000126382 7.74413 0.0489698 7.64644 0.146611L0.146437 7.64661C-0.0488427 7.84189 -0.0488427 8.1583 0.146485 8.35362Z" />
            </svg>
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNext}
            disabled={activeCard + 1 === techTestQA.length}
          >
            <svg
              className={s.iconBtn}
              width="24"
              height="16"
              viewBox="0 0 24 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.8535 7.64662L16.3535 0.146618C16.1582 -0.04871 15.8418 -0.04871 15.6465 0.146618C15.4512 0.341946 15.4512 0.658353 15.6465 0.853634L22.293 7.50013L0.500016 7.50013C0.223641 7.50013 0 7.72377 0 8.00015C0 8.27652 0.223641 8.50016 0.500016 8.50016L22.293 8.50016L15.6465 15.1466C15.4512 15.3419 15.4512 15.6584 15.6465 15.8536C15.7441 15.9513 15.8721 16.0001 16 16.0001C16.128 16.0001 16.2559 15.9513 16.3536 15.8536L23.8536 8.35363C24.0488 8.15835 24.0488 7.84195 23.8535 7.64662Z" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
