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
      dispatch(fetchTest('/test-theory'));
      return;
    }
    dispatch(testActions.addCategory(categories.tech));
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
          <Button onClick={handlePrev} disabled={activeCard - 1 === 0}>
            <PrevSvg />
            <ButtonSpan>Previus question</ButtonSpan>
          </Button>
          <Button onClick={handleNext} disabled={activeCard + 1 > questions.length}>
            <ButtonSpan>Next question</ButtonSpan>
            <NextSvg />
          </Button>
        </ButtonsBox>
      </Section>
    </>
  );
}
