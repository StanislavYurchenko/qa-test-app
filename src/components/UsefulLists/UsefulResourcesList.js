//import { Heading1, Heading2 } from './MaterialsPage.style.js';
import { Title, List, Link } from './UsefulLists.style';
export default function UsefulResourcesList() {
  return (
    <>
      <Title>Useful resources</Title>
      <List>
        <li>
          1.&nbsp;
          <Link href="https://dou.ua/" target="_blank">
            dou.ua
          </Link>
        </li>
        <li>
          2.&nbsp;
          <Link href="https://habr.com/" target="_blank">
            Habr.com
          </Link>
        </li>
        <li>
          3.&nbsp;
          <Link href="https://goit.ua/" target="_blank">
            goit.ua
          </Link>
        </li>
        <li>
          4.&nbsp;
          <Link href="https://www.softwaretestinghelp.com/" target="_blank">
            Software Testing Help
          </Link>
        </li>
      </List>
    </>
  );
}
