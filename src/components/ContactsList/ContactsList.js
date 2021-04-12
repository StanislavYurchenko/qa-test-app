import PropTypes from 'prop-types';
import ContactCard from '../ContactCard/';
import contacts from '../../utils/contacts';
import { List, ListItem } from './ContactsList.style.js';

const ContactsList = () => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.name}>
          <ContactCard {...contact} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
