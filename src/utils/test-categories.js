export default { theory: '[Testing theory_]', tech: '[QA technical training_]' };
import i18n from '../i18n';

export const getTheory = () => {
  return { theory: i18n.t('results__description'), tech: i18n.t('qaTechnicalTraining') };
};
