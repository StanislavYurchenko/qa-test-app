import PropTypes from 'prop-types';
import LinkItem from '../LinkItem';
import { List } from './LinkList.style.js';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { blueGrey } from '@material-ui/core/colors';

const LinkList = ({ hubLink, linLink }) => {
  return (
    <>
      <List>
        <LinkItem link={hubLink} linkName="GitHub">
          <GitHubIcon style={{ color: blueGrey[900], fontSize: 48 }} />
        </LinkItem>
        <LinkItem link={linLink} linkName="Linkedin">
          <LinkedInIcon style={{ fontSize: 52, color: blueGrey[900] }} />
        </LinkItem>
      </List>
    </>
  );
};

LinkList.propTypes = {
  hubLink: PropTypes.string,
  linLink: PropTypes.string,
};

export default LinkList;
