import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ResultContainer, HeadingParagraph, DescriptionParagraph } from './TestResult.style';
import { getResult } from '../../redux/test/testSelectors';

function TestResult({ correctAnswers, incorrectAnswers }) {
  const { t } = useTranslation();
  const totalAnswers = correctAnswers + incorrectAnswers;

  const RESULTS = [
    {
      heading: `${t('results__resultTitlePerfect')}`,
      description: `${t('results__resultDescriptionPerfect')}`,
    },
    {
      heading: `${t('results__resultTitleNotBad')}`,
      description: `${t('results__resultDescriptionNotBad')}`,
    },
    {
      heading: `${t('results__resultTitleSatisfactorily')}`,
      description: `${t('results__resultDescriptionSatisfactorily')}`,
    },
    {
      heading: `${t('results__resultTitleBad')}`,
      description: `${t('results__resultDescriptionBad')}`,
    },
    {
      heading: `${t('results__resultTitleVeryBad')}`,
      description: `${t('results__resultDescriptionVeryBad')}`,
    },
  ];

  function calculateTestResult(correct, total) {
    const correctPercent = correct / total;

    if (correctPercent <= 0.2) return RESULTS[4];
    else if (correctPercent > 0.2 && correctPercent <= 0.4) return RESULTS[3];
    else if (correctPercent > 0.4 && correctPercent <= 0.6) return RESULTS[2];
    else if (correctPercent > 0.6 && correctPercent <= 0.8) return RESULTS[1];
    else return RESULTS[0];
  }

  const result = calculateTestResult(correctAnswers, totalAnswers);

  return (
    <ResultContainer>
      <HeadingParagraph>{result.heading}</HeadingParagraph>
      <DescriptionParagraph> {result.description}</DescriptionParagraph>
    </ResultContainer>
  );
}

const mapStateToProps = state => ({
  correctAnswers: getResult(state).correct,
  incorrectAnswers: getResult(state).wrong,
});

export default connect(mapStateToProps, null)(TestResult);
