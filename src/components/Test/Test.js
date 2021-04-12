import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import testActions from '../../redux/test/testActions';
import { fetchTest, sendAnswers } from 'redux/test/testOperations';
import * as selectors from '../../redux/test/testSelectors';
import categories from '../../utils/test-categories';
import { transformAnswers } from '../../services/transformAnswers';

import Card from './Card';
import Modal from './Modal';
import { Section, TopBox, Title, FinishButton, ButtonsBox, Button, ButtonSpan } from './Test.style';

import { ReactComponent as PrevSvg } from '../../images/prev.svg';
import { ReactComponent as NextSvg } from '../../images/next.svg';

// import s from './Test.module.css';

export default function Test({ title }) {
  const [open, setOpen] = useState(false);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const category = useSelector(selectors.getCategory);
  const activeCard = useSelector(selectors.getActiveCard);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname !== '/test' && location.pathname !== '/auth') {
      history.push('/test');
      setOpen(true);
    }
  });

  useEffect(() => {
    if (questions.length !== 0) return;
    if (category === categories.theory) {
      dispatch(testActions.addCategory(categories.theory));
      console.log(`categories.theory`, categories.theory);
      dispatch(fetchTest('/test-theory'));
      return;
    }
    dispatch(testActions.addCategory(categories.tech));
    console.log(`categories.theory`, categories.tech);
    dispatch(fetchTest('/test-tech'));
  }, []);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function handleClickCancel() {
    closeModal();
    dispatch(testActions.testRefresh());
    history.push('/');
  }
  function handleClickContinue() {
    closeModal();
  }

  const handlePrev = () => {
    dispatch(testActions.addActiveCard(activeCard - 1));
  };
  const handleNext = () => {
    dispatch(testActions.addActiveCard(activeCard + 1));
  };
  const handleAnswer = targerAnswer => {
    dispatch(testActions.addAnswer(targerAnswer));
  };
  const handleFinishTest = () => {
    const readyAnswers = transformAnswers(answers);
    if (questions.length === readyAnswers.length) {
      dispatch(sendAnswers(readyAnswers));
      history.push('/results');
      return;
    }
    openModal();
  };

  return (
    <>
      <Section>
        <Modal
          open={open}
          onClose={closeModal}
          onCancel={handleClickCancel}
          onContinue={handleClickContinue}
        />
        <TopBox>
          <Title>{title ? title : category}</Title>
          <FinishButton onClick={handleFinishTest}>Finish test</FinishButton>
        </TopBox>

        {questions.length && (
          <Card
            questions={questions}
            activeCard={activeCard}
            handleAnswer={handleAnswer}
            answered={answers}
          />
        )}

        <ButtonsBox>
          <Button>
            <PrevSvg />
            <ButtonSpan onClick={handlePrev} disabled={activeCard - 1 === 0}>
              Previus question
            </ButtonSpan>
          </Button>
          <Button>
            <ButtonSpan onClick={handleNext} disabled={activeCard + 1 > questions.length}>
              Next question
            </ButtonSpan>
            <NextSvg />
          </Button>
        </ButtonsBox>
      </Section>
    </>

    /*{ <section className={s.section}>
        <Modal
          open={open}
          onClose={closeModal}
          onCancel={handleClickCancel}
          onContinue={handleClickContinue}
        />
        <div className={s.above}>
          <h2 className={s.title}>{title ? title : category}</h2>
          <button className={s.aboveButton} type="button" onClick={handleFinishTest}>
            Finish test
          </button>
        </div>
        {questions.length && (
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
            <span>Previus question</span>
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={handleNext}
            disabled={activeCard + 1 > questions.length}
          >
            <span>Next question</span>
            <NextSvg />
          </button>
        </div>
      </section>
    </Section> }*/
  );
}
