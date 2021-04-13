import PropTypes from 'prop-types';
import { Link, LinkHref, Svg, Span } from './LinkItem.style.js';

const LinkItem = ({ link, linkName, children, icon }) => {
  return (
    <Link>
      <LinkHref href={link} target="_blank">
        {children}
        <Span>{linkName}</Span>
      </LinkHref>
    </Link>
  );
};

LinkItem.propTypes = {
  link: PropTypes.string,
  linkName: PropTypes.string,
  icon: PropTypes.string,
};

export default LinkItem;
