import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';

import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledCardContent,
  StyledParagraph,
  StyledAbout,
  StyledWrapper,
  Overlay,
  SocialList,
  Wrapper,
} from './ContactCard.styled.js';

const useStyles = makeStyles(theme => ({
  root: {
    // width: 280,
    // margin: `${theme.spacing(2.5)}px auto`,
  },
  paper: {
    // width: 240,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const ContactCard = ({ photo, name, position, about }) => {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <Wrapper>
        <Overlay className="overlay">
          <SocialList>
            <li>
              <a href="#">
                <svg>
                  <use href="./images/icons/sprite.svg#icon-facebook"></use>
                </svg>
                <span class="visually-hidden">facebook link</span>
              </a>
            </li>
            <li>
              <a href="#" class="social-list__item-link social-list__item-link--twitter">
                <svg class="social-list__item-svg">
                  <use href="./images/icons/sprite.svg#icon-twitter"></use>
                </svg>
                <span class="visually-hidden">twitter link</span>
              </a>
            </li>
          </SocialList>
        </Overlay>
        <StyledCard className={classes.root}>
          <StyledWrapper>
            <StyledCardMedia component="img" alt={name} height="244" image={photo} title={name} />
            <StyledCardContent>
              <StyledTypography color="textPrimary" component="p">
                {name}
              </StyledTypography>
              <StyledParagraph color="textPrimary" component="p">
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
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ContactCard;
