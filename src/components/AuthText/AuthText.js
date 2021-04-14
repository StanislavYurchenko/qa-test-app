import { createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { getTheme } from '../../redux/theme/themeSelectors';

import { Wrapper, PageHeader, Text, Accent } from './AuthText.style';

const AuthText = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  return (
    <Wrapper>
      <PageHeader theme={customTheme}>Pro Test</PageHeader>
      <Text theme={customTheme}>
        <Accent theme={customTheme}>[</Accent>
        We will help you find weak points in knowledge so that you can strengthen it. We will show
        you what is relevant to know for a <Accent theme={customTheme}>QA Engineer</Accent> and will
        try to make the learning process more diverse_
        <Accent theme={customTheme}>]</Accent>
      </Text>
    </Wrapper>
  );
};

export default AuthText;
