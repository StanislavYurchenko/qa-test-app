import { useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { getTheme } from '../../redux/theme/themeSelectors';

import { Container, Oops, Icon, ErrorCode, Message, Back, StyledLink } from './NotFound.style';

const NotFound = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  return (
    <Container theme={customTheme}>
      <Icon theme={customTheme} />
      <Oops theme={customTheme}>OOPS!!!</Oops>
      <Message theme={customTheme}>
        It could be you, or it could be us, but there's no page here
      </Message>
      <ErrorCode theme={customTheme}>
        ERROR code: <span>404</span>
      </ErrorCode>
      <Back theme={customTheme}>
        <span>Back to </span>
        <StyledLink to="/" theme={customTheme}>
          home page
        </StyledLink>
      </Back>
    </Container>
  );
};

export default NotFound;
