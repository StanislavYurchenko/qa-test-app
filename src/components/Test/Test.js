import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { techTestQA, teoryTest } from './data';
import s from './Test.module.css';
import styled from 'styled-components';
import { ReactComponent as PrevSvg } from '../../images/prev.svg';
import { ReactComponent as NextSvg } from '../../images/next.svg';
import testActions from '../../redux/test/testActions';
import { fetchQuestions } from 'redux/test/testOperations';

export default function Test({ title }) {
  // const [answers, setAnswers] = useState({});
  const [activeCard, setActiveCard] = useState(0);

  const answers = useSelector(state => state.test.answers);
  const questions = useSelector(state => state.test.questions);
  console.log(`answers`, answers);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length === Object.keys(answers).length) {
      handleMainButton(answers);
    }
  }, [answers]);

  const handlePrev = () => {
    setActiveCard(activeCard - 1);
  };

  const handleNext = () => {
    setActiveCard(activeCard + 1);
  };

  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };

  const handleMainButton = (value = null) => {
    if (value === null) {
      dispatch(testActions.resetAnswers({}));
    }
    // testOperations.sendAnswers();
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
        <Card
          questions={questions}
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
