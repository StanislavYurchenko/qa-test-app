import PropTypes from 'prop-types';

const ContactItem = ({ photo, name, position, about }) => {
  return (
    <li>
      <img src={photo} alt={name} height="244" width="280" />
      <p>{name}</p>
      <p>{position}</p>
      <p>{about}</p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ContactItem;
