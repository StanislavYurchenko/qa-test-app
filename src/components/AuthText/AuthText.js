import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getTheme } from '../../redux/theme/themeSelectors';

import { Wrapper, PageHeader, Text, Accent } from './AuthText.style';

const AuthText = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <PageHeader theme={customTheme}>Pro Test</PageHeader>
      <Text theme={customTheme}>
        <Accent theme={customTheme}>[</Accent>
        {t('login__descriptionStart')} <Accent theme={customTheme}>QA Engineer</Accent>{' '}
        {t('login__descriptionEnd')}
        <Accent theme={customTheme}>]</Accent>
      </Text>
    </Wrapper>
  );
};

export default AuthText;
