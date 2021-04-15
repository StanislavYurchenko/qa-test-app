import { Title, List, Link, Item } from './UsefulLists.style';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function UsefulResourcesList() {
  const theme = useSelector(getTheme);
  const customTheme = createMuiTheme(theme);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Title theme={customTheme}>{t('info__titleResources')}</Title>
      <List>
        <Item theme={customTheme}>
          1.&nbsp;
          <Link href="https://dou.ua/" target="_blank" theme={customTheme}>
            dou.ua
          </Link>
        </Item>
        <Item theme={customTheme}>
          2.&nbsp;
          <Link href="https://habr.com/" target="_blank" theme={customTheme}>
            Habr.com
          </Link>
        </Item>
        <Item theme={customTheme}>
          3.&nbsp;
          <Link href="https://goit.ua/" target="_blank" theme={customTheme}>
            goit.ua
          </Link>
        </Item>
        <Item theme={customTheme}>
          4.&nbsp;
          <Link href="https://www.softwaretestinghelp.com/" target="_blank" theme={customTheme}>
            Software Testing Help
          </Link>
        </Item>
      </List>
    </>
  );
}
