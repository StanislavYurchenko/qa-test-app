import Artur from './Artur_Stakhov-min.jpg';
import Elena from './Elena_Panasyuk-min.jpg';
import Inna from './Inna_Tishchenko-min.jpg';
import Roman from './Roman_Voznyy-min.jpg';
import Valentin from './Valentin_Yakubovskiy-min.jpg';
import Volodymyr from './Volodymyr_Babych-min.jpg';
import Yulia from './Yulia_Labutkina-min.jpg';
import Stanislav from './Yurchenko_Stanislav-min.jpg';
import Andriy from './Андрій_Кричківський-min.jpg';

export const images = {
  Artur_Stakhov: Artur,
  Elena_Panasyuk: Elena,
  Inna_Tishchenko: Inna,
  Roman_Voznyy: Roman,
  Valentin_Yakubovskiy: Valentin,
  Volodymyr_Babych: Volodymyr,
  Yulia_Labutkina: Yulia,
  Yurchenko_Stanislav: Stanislav,
  Andriy_Krichkivskiy: Andriy,
};

import ContactsList from '../../components/ContactsList';

function ContactListView() {
  return <ContactsList />;
}

export default ContactListView;
