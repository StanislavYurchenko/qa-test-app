import { useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

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

import Modal from './Modal';

export default function Test({ title }) {
  const [open, setOpen] = useState(false);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const category = useSelector(selectors.getCategory);
  const result = useSelector(selectors.getResult);
  const activeCard = useSelector(selectors.getActiveCard);
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const isRender = questions.length;

  useEffect(() => {
    if (questions.length) return;
    // console.log(`match.url`, match.url);
    if (match.url === '/test-theory') {
      dispatch(testActions.addCategory('[Теория тестирования_]'));
      dispatch(fetchTest(match.url));
    }
    if (match.url === '/test-tech') {
      dispatch(testActions.addCategory('[Техническое тестирования_]'));
      dispatch(fetchTest(match.url));
    }
  }, []);

  function openModal() {
    setOpen(true);
  }
  const handleClickCancel = () => {
    setOpen(false);
    dispatch(testActions.testRefresh());
    history.push('/');
  };
  const handleClickContinue = () => {
    setOpen(false);
  };

  // useEffect(() => {
  // history.push({ ...location, search: `${activeCard}` });
  // const cardParams = new URLSearchParams(location.search).get('activeCard') ?? '1';
  // dispatch(testActions.addActiveCard(cardParams));
  // }, [activeCard]);

  const handlePrev = () => {
    // setActiveCard(activeCard - 1);
    // history.push({ ...location, search: `card=${activeCard + 2}` });
    dispatch(testActions.addActiveCard(activeCard - 1));
    // history.push({ ...location, search: `${Number(activeCard) - 1}` });
    // location.search = `q=${activeCard}`;
  };
  const handleNext = () => {
    // setActiveCard(activeCard + 1);
    dispatch(testActions.addActiveCard(activeCard + 1));
    // history.push({ ...location, search: `card=${activeCard + 2}` });
    // history.push({ ...location, search: `${Number(activeCard) + 1}` });
  };
  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };

  function transformAnswers(answers) {
    const entries = Object.entries(answers);
    return entries.map(([id, answer]) => ({ questionId: Number(id), answer }));
  }
  const handleFinishTest = () => {
    const readyAnswers = transformAnswers(answers);
    if (questions.length === readyAnswers.length) {
      dispatch(sendAnswers(readyAnswers));
      history.push('/useful-info');
      return;
    }
    openModal();
  };

  return (
    <>
      <section className={s.section}>
        <Modal open={open} onCancel={handleClickCancel} onContinue={handleClickContinue} />
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : category}</h2>
          <button className={s.aboveButton} type="button" onClick={handleFinishTest}>
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
            disabled={activeCard - 1 === 0}
          >
            <PrevSvg />
            <span>Предыдущий вопрос</span>
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNext}
            disabled={activeCard + 1 > questions.length}
          >
            <span>Следующий вопрос</span>
            <NextSvg />
          </button>
        </div>
      </section>
    </>
  );
}
