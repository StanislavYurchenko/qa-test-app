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
import { ReactComponent as CloseMenu } from '../../images/closeMenu.svg';
// import { red } from '@material-ui/core/colors';
import styled from 'styled-components';
import { useState } from 'react';

const StylesHeader = styled(AppBar)`
  background-color: #f5f6fb;
  box-shadow: none;
  border-bottom: 1px solid ${HEADER_BORDER_COLOUR};
  z-index: 11;
`;
const StylesLogo = styled(Link)`
  display: block;
  width: 129px;
  height: 28px;
  margin-right: auto;
`;
const StylesToolbar = styled(Toolbar)`
  min-height: 70px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 0px;
`;

const StylesBox = styled.div`
  /* display: none; */
  align-items: center;
  justify-content: center;
  min-width: 55px;
  min-height: 70px;
  border-left: 1px solid ${HEADER_BORDER_COLOUR};
`;

const StylesButton = styled(Button)`
  width: 15px;
  height: 15px;
  padding: 0px;
  min-width: 0px;
`;

const StylesModal = styled(Box)`
  right: ${props => (props.open ? 0 : '-100%')};
  /* top: ${props => (props.open ? '71px' : '-100%')}; */
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fb;
  padding: 26px 0;
  text-align: center;
  transition: all 0.5s linear;
`;

const TestNav = styled.p`
  color: black;
  font-size: 14px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 100,
  },
  StylesBox: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      // backgroundColor: '#f5f5f5',
      display: 'flex',
    },
  },
  TestNav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      // backgroundColor: '#f5f5f5',
      display: 'block',
      paddingRight: '20px',
    },
  },
  Span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#555555',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',
    marginRight: '20px',
  },
  // menuButton: {
  //   // marginRight: theme.spacing(2),
  //   [theme.breakpoints.down('xs')]: {
  //     display: 'flex',
  // }},
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          <TestNav className={classes.TestNav}>Contacts</TestNav>
          <span className={classes.Span}>D</span>
          <StylesBox className={classes.StylesBox}>
            <StylesButton onClick={onButtonClick}>
              {isModalOpen ? <CloseMenu /> : <OpenMenuSvg />}
            </StylesButton>
          </StylesBox>
        </StylesToolbar>
      </StylesHeader>
      <StylesModal open={isModalOpen}>
        <TestNav>Contacts</TestNav>
      </StylesModal>
    </div>
  );
}
