import PropTypes from 'prop-types';
import LinkItem from '../LinkItem';
import { List } from './LinkList.styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { indigo } from '@material-ui/core/colors';

const LinkList = ({ hubLink, linLink }) => {
  return (
    <>
      <List>
        <LinkItem link={hubLink} linkName="GitHub">
          <GitHubIcon style={{ color: indigo[900], fontSize: 48 }} />
        </LinkItem>
        <LinkItem link={linLink} linkName="Linkedin">
          <LinkedInIcon style={{ fontSize: 52, color: indigo[900] }} />
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
