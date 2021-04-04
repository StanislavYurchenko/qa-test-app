import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { PAGE_BACKGROUND_COLOUR, HEADER_BORDER_COLOUR } from '../../themes/colors';
import { ReactComponent as LogoSvg } from '../../images/logo.svg';
import { ReactComponent as OpenMenuSvg } from '../../images/openMenu.svg';
// import { red } from '@material-ui/core/colors';
import styled from 'styled-components';
// import MenuIcon from '@material-ui/icons/Menu';

const StylesHeader = styled(AppBar)`
  background-color: #f5f6fb;
  box-shadow: none;
  border-bottom: 1px solid ${HEADER_BORDER_COLOUR};
  /* min-height: 70px; */
`;
const StylesLogo = styled(Link)`
  display: block;
  width: 129px;
  height: 28px;
`;
const StylesToolbar = styled(Toolbar)`
  min-height: 70px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 0px;
`;

const StylesBox = styled.div`
  display: flex;
  align-items: center;
  min-width: 55px;
  min-height: 70px;
  border-left: 1px solid ${HEADER_BORDER_COLOUR};
`;

const StylesButton = styled(Button)`
  width: 15px;
  height: 15px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StylesHeader position="static">
        <StylesToolbar>
          <StylesLogo to="/" exact="true">
            <LogoSvg />
          </StylesLogo>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <StylesBox>
            <StylesButton>
              <OpenMenuSvg />
            </StylesButton>
          </StylesBox>
        </StylesToolbar>
      </StylesHeader>
    </div>
  );
}
