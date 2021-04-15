import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function Test({ title }) {
  const [open, setOpen] = useState(false);

  const answers = useSelector(selectors.getAnswers);
  const questions = useSelector(selectors.getQuestions);
  const category = useSelector(selectors.getCategory);
  const activeCard = useSelector(selectors.getActiveCard);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const theme = useSelector(getTheme);
  const { t, i18n } = useTranslation();

  const customTheme = theme && createMuiTheme(theme);

  let rout = '';

  if (category === categories.theory) rout = '/test-theory';
  else rout = '/test-tech';

  useEffect(() => {
    if (location.pathname !== '/test' && location.pathname !== '/auth') {
      history.push('/test');
      setOpen(true);
    }
  });

  useEffect(() => {
    if (questions.length !== 0) return;
    dispatch(fetchTest(rout));
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
      dispatch(sendAnswers({ rout, readyAnswers }));
      history.push('/results');
      return;
    }
    openModal();
  };

  return (
    <>
      <Section theme={customTheme}>
        <Modal
          open={open}
          onClose={closeModal}
          onCancel={handleClickCancel}
          onContinue={handleClickContinue}
          theme={customTheme}
        />
        <TopBox theme={customTheme}>
          <Title theme={customTheme}>{category}</Title>
          <FinishButton onClick={handleFinishTest} theme={customTheme}>
            {t('test__buttonFinishTest')}
          </FinishButton>
        </TopBox>

        {questions.length && (
          <Card
            questions={questions}
            activeCard={activeCard}
            handleAnswer={handleAnswer}
            answered={answers}
            theme={customTheme}
          />
        )}

        <ButtonsBox theme={customTheme}>
          <Button onClick={handlePrev} disabled={activeCard - 1 === 0} theme={customTheme}>
            <PrevSvg theme={customTheme} />
            <ButtonSpan theme={customTheme}>{t('test__buttonPrev')}</ButtonSpan>
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeCard + 1 > questions.length}
            theme={customTheme}
          >
            <ButtonSpan theme={customTheme}>{t('test__buttonNext')}</ButtonSpan>
            <NextSvg theme={customTheme} />
          </Button>
        </ButtonsBox>
      </Section>
    </>
  );
}
