import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import LinkList from '../LinkList';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';

import { createMuiTheme } from '@material-ui/core/styles';

import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardContent,
  StyledParagraph,
  StyledAbout,
  StyledWrapper,
  Overlay,
  Wrapper,
} from './ContactCard.styled.js';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const ContactCard = ({ photo, name, position, about, hubLink, linLink }) => {
  const classes = useStyles();
  const theme = useSelector(getTheme);
  const customTheme = createMuiTheme(theme);

  return (
    <StylesProvider injectFirst>
      <Wrapper>
        <Overlay className="overlay">
          <LinkList hubLink={hubLink} linLink={linLink} />
        </Overlay>
        <StyledCard theme={customTheme}>
          <StyledWrapper>
            <StyledCardMedia width="280" height="244" alt={name} src={photo} title={name} />
            <StyledCardContent>
              <StyledTypography theme={customTheme}>{name}</StyledTypography>
              <StyledParagraph color="textPrimary" component="p" theme={customTheme}>
                {position}
              </StyledParagraph>
              <StyledAbout color="textPrimary" component="p">
                {about}
              </StyledAbout>
            </StyledCardContent>
          </StyledWrapper>
        </StyledCard>
      </Wrapper>
    </StylesProvider>
  );
};

ContactCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  about: PropTypes.string,
  hubLink: PropTypes.string,
  linLink: PropTypes.string,
};

export default ContactCard;
