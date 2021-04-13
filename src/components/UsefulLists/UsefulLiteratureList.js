import { Title, List, Item } from './UsefulLists.style';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function UsefulLiteratureList() {
  const theme = useSelector(getTheme);
  const customTheme = createMuiTheme(theme);
  return (
    <>
      <Title theme={customTheme}>Useful literature</Title>
      <List theme={customTheme}>
        <Item theme={customTheme}>1. Testing dot.com Savin.</Item>
        <Item theme={customTheme}>2. A mental hospital in the hands of patients.</Item>
        <Item theme={customTheme}>3. Scrum. J. Sutherland.</Item>
      </List>
    </>
  );
}
