import PropTypes from 'prop-types';
import ContactCard from '../ContactCard';
import { images } from '../../images/photos/photos';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  return (
    <>
      <List>
        <ContactCard
          photo={images.Artur_Stakhov}
          name="Artur Stakhov"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Andriy_Krichkivskiy}
          name="Andriy Krichkivskiy"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Elena_Panasyuk}
          name="Elena Panasyuk"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Inna_Tishchenko}
          name="Inna Tishchenko"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Roman_Voznyy}
          name="Roman Voznyy"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Valentin_Yakubovskiy}
          name="Valentin Yakubovskiy"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Volodymyr_Babych}
          name="Volodymyr Babych"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Yulia_Labutkina}
          name="Yulia Labutkina"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Yurchenko_Stanislav}
          name="Yurchenko Stanislav"
          position="FullStack Developer"
          about="Lorem"
        />
        <ContactCard
          photo={images.Artur_Stakhov}
          name="Grygoriy Chernish "
          position="FullStack Developer"
          about="Lorem"
        />
      </List>
    </>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ContactsList;
