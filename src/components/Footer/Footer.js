import {
  StyledFooter,
  Text,
  StyledCopyright,
  StyledVector,
  StyledHeart,
  StyledLink,
} from './Footer.style';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

function Footer() {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  return (
    <StyledFooter theme={customTheme}>
      <Text theme={customTheme}>
        <StyledCopyright /> 2021 &nbsp;
        <StyledVector />
        &nbsp; All Rights Reserved &nbsp;
        <StyledVector />
        &nbsp; Developed with <StyledHeart /> by&nbsp;
        <StyledLink href="/contacts">Magnificent Ten</StyledLink>
      </Text>
    </StyledFooter>
  );
}

export default Footer;
