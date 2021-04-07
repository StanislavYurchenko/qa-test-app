//import { Heading1, Heading2 } from './MaterialsPage.style.js';
import { Title, List } from './UsefulLists.style';
export default function UsefulResourcesList() {
  return (
    <>
      <List>
        <Title>Useful resources</Title>
        <li>
          1.&nbsp;
          <a href="https://dou.ua/" target="_blank">
            dou.ua
          </a>
        </li>
        <li>
          2.&nbsp;
          <a href="https://habr.com/" target="_blank">
            Habr.com
          </a>
        </li>
        <li>
          3.&nbsp;
          <a href="https://goit.ua/" target="_blank">
            goit.ua
          </a>
        </li>
        <li>
          4.&nbsp;
          <a href="https://www.softwaretestinghelp.com/" target="_blank">
            Software Testing Help
          </a>
        </li>
      </List>
    </>
  );
}
