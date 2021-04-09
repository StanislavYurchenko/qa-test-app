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

export default function Test({ title }) {
  const [activeCard, setActiveCard] = useState(0);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const category = useSelector(selectors.getCategory);
  const result = useSelector(selectors.getResult);
  const card = useSelector(selectors.getActiveCard);
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const isRender = questions.length;

  useEffect(() => {
    if (questions.length) return;
    if (match.url === '/test-theory') {
      dispatch(testActions.addCategory('[Теория тестирования_]'));
      dispatch(fetchTest(match.url));
    }
    if (match.url === '/test-tech') {
      dispatch(testActions.addCategory('[Техническое тестирования_]'));
      dispatch(fetchTest(match.url));
    }
  }, []);

  useEffect(() => {
    history.push({ ...location, search: `${card}` });
    const cardParams = new URLSearchParams(location.search).get('card') ?? '1';
    dispatch(testActions.addActiveCard(cardParams));
  }, [card]);

  const handlePrev = () => {
    // setActiveCard(activeCard - 1);
    // history.push({ ...location, search: `card=${activeCard + 2}` });
    dispatch(testActions.addActiveCard(card - 1));
    history.push({ ...location, search: `${card - 1}` });
    // location.search = `q=${activeCard}`;
  };
  const handleNext = () => {
    // setActiveCard(activeCard + 1);
    dispatch(testActions.addActiveCard(card + 1));
    // history.push({ ...location, search: `card=${activeCard + 2}` });
    history.push({ ...location, search: `${Number(card) + 1}` });
  };
  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };

  const handleMainButton = () => {
    const entries = Object.entries(answers);
    const transformAnswers = entries.map(([id, answer]) => {
      return { questionId: Number(id), answer };
    });
    dispatch(sendAnswers(transformAnswers));
    // history.push('/useful-info');
    console.log('open modal');
  };

  return (
    <>
      <section className={s.section}>
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : category}</h2>
          <button className={s.aboveButton} type="button" onClick={handleMainButton}>
            Завершить тест
          </button>
        </div>
        {isRender && (
          <Card
            questions={questions}
            activeCard={card}
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
