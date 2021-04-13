import { Wrapper, PageHeader, Text, Accent } from './AuthText.style';

const AuthText = () => {
  return (
    <Wrapper>
      <PageHeader>Pro Test</PageHeader>
      <Text>
        <Accent>[</Accent>
        We will help you find weak points in knowledge so that you can strengthen it. We will show
        you what is relevant to know for a <Accent>QA Engineer</Accent> and will try to make the
        learning process more diverse_
        <Accent>]</Accent>
      </Text>
    </Wrapper>
  );
};

export default AuthText;
