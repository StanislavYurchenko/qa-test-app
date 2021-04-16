import { Title, List, Item } from './UsefulLists.style';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function UsefulLiteratureList() {
  const theme = useSelector(getTheme);
  const customTheme = createMuiTheme(theme);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Title theme={customTheme}>{t('info__titleLiterature')}</Title>
      <List theme={customTheme}>
        <Item theme={customTheme}>1. {t('info__resourcesTest')}</Item>
        <Item theme={customTheme}>2. {t('info__resourcesMental')}</Item>
        <Item theme={customTheme}>3. {t('info__resourcesScram')}</Item>
      </List>
    </>
  );
}
