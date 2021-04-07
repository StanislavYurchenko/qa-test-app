import { Container, Oops, Icon, ErrorCode, Message, Return, StyledLink } from './NotFound.style';

const NotFound = () => {
  return (
    <Container>
      <Icon />
      <Oops>OOPS!!!</Oops>
      <Message>We can't seems to find the page you're looking for</Message>
      <ErrorCode>
        ERROR code: <span>404</span>
      </ErrorCode>
      <Return>
        <span>Return to </span>
        <StyledLink to="/">home page</StyledLink>.
      </Return>
    </Container>
  );
};

export default NotFound;
