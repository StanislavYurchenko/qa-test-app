import {
  StyledFooter,
  Text,
  StyledCopyright,
  StyledVector,
  StyledHeart,
  StyledLink,
} from './Footer.style';

function Footer() {
  return (
    <StyledFooter>
      <Text>
        <StyledCopyright /> 2021 &nbsp;
        <StyledVector />
        &nbsp; All Rights Reserved &nbsp;
        <StyledVector />
        &nbsp; Developed with <StyledHeart /> by&nbsp;
        <StyledLink href="/contacts">GoIT Students</StyledLink>
      </Text>
    </StyledFooter>
  );
}

export default Footer;
