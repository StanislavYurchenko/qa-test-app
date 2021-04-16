import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function TestCategory() {
  const { t } = useTranslation();
  const category = useSelector(state => state.test.category);

  const testTheory = `[${t('testingTheory')}_]`;
  const testTechnic = `[${t('qaTechnicalTraining')}_]`;

  return (
    <span>
      {category === '[QA technical training_]' || category === 'Техническая подготовка QA'
        ? testTechnic
        : testTheory}
    </span>
  );
}
