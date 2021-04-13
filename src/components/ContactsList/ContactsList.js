import ContactCard from '../ContactCard/';
import contacts from '../../utils/contacts';
import { List, ListItem } from './ContactsList.style.js';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

const ContactsList = () => {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  return (
    <List>
      {contacts.map(contact => (
        <ListItem theme={customTheme} key={contact.name}>
          <ContactCard {...contact} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
