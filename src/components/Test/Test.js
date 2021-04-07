import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import s from './Test.module.css';
import styled from 'styled-components';
import { ReactComponent as PrevSvg } from '../../images/prev.svg';
import { ReactComponent as NextSvg } from '../../images/next.svg';
import testActions from '../../redux/test/testActions';
import { fetchTest, sendAnswers } from 'redux/test/testOperations';
import * as selectors from '../../redux/test/testSelectors';

export default function Test({ title }) {
  const [activeCard, setActiveCard] = useState(0);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const dispatch = useDispatch();

  const isRender = questions.length;

  useEffect(() => {
    dispatch(fetchTest());
  }, []);

  useEffect(() => {}, [answers]);

  const handlePrev = () => {
    setActiveCard(activeCard - 1);
  };

  const handleNext = () => {
    setActiveCard(activeCard + 1);
  };

  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };

  const handleMainButton = () => {
    if (questions.length === Object.keys(answers).length) {
      console.log(`questions.length`, questions.length);
      console.log(`Object.keys(answers).length`, Object.keys(answers).length);
      console.log(`не на всі відповіли`);
      return;
    }
    dispatch(sendAnswers(answers));
  };

  return (
    <>
      <section className={s.section}>
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : '[Теория тестирования_]'}</h2>
          <button className={s.aboveButton} type="button" onClick={handleMainButton}>
            Завершить тест
          </button>
        </div>
        {isRender && (
          <Card
            questions={questions}
            activeCard={activeCard}
            handleAnswer={handleAnswer}
            answered={answers}
          />
        )}
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
            disabled={activeCard + 1 >= questions.length}
          >
            <span>Следующий вопрос</span>
            <NextSvg />
          </button>
        </div>
      </section>
    </>
  );
}
