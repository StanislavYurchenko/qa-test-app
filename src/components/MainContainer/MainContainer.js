import { StyledContainer } from './MainContainer.style';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function Container({ children }) {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  return <StyledContainer theme={customTheme}>{children}</StyledContainer>;
}
