import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { PAGE_BACKGROUND_COLOUR, HEADER_BORDER_COLOUR } from '../../themes/colors';
import { ReactComponent as LogoSvg } from '../../images1/logo.svg';
import { ReactComponent as OpenMenuSvg } from '../../images1/openMenu.svg';
import { ReactComponent as CloseMenuSvg } from '../../images1/closeMenu.svg';
import { ReactComponent as LogOut } from '../../images1/signOut.svg';
import { StylesModal } from './Header.style';
import Navigation from 'components/Navigation';

import styled from 'styled-components';
import { useState } from 'react';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './Header.style';

// const StylesHeader = styled(AppBar)`
/* flex-grow: 1; */
/* position: 'fixed', */
/* width: 100%;
    z-index: 100; */

//   background-color: #f5f6fb;
//   box-shadow: none;
//   border-bottom: 1px solid ${HEADER_BORDER_COLOUR};
//   z-index: 11;
// `;
// const StylesLogo = styled(Link)`
//   display: block;
//   width: 129px;
//   height: 28px;
//   margin-right: auto;
// `;
// const StylesToolbar = styled(Toolbar)`
//   min-height: 70px;
//   justify-content: space-between;
//   padding-left: 20px;
//   padding-right: 0px;
// `;

// const StylesBox = styled.div`
//   align-items: center;
//   justify-content: center;
//   min-width: 55px;
//   min-height: 70px;
//   border-left: 1px solid ${HEADER_BORDER_COLOUR};
// `;

// const StylesButton = styled(Button)`
//   width: 15px;
//   height: 15px;
//   padding: 0px;
//   min-width: 0px;
// `;

const TestNav = styled.p`
  color: black;
  font-size: 14px;
`;

export default function ButtonAppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerStyles}>
        <Toolbar className={classes.toolBarStyles}>
          <Link to="/" exact="true" className={classes.logoStyles}>
            <LogoSvg />
          </Link>
          <Navigation className={classes.TestNav} />
          {/* <TestNav className={classes.TestNav}>Contacts</TestNav> */}
          {isLogin && <span className={classes.spanStyles}>D</span>}
          {/* {isLogin && (
          //   <div className={classes.buttonWrapStylesClose}>
          //     <Button className={classes.buttonStyles} onClick={e => dispatch(logoutUser())}>
          //       <LogOut />
          //     </Button>
          //   </div>
          )} */}
          <Box className={classes.buttonWrapStyles} display={{ xs: 'none', sm: 'flex' }}>
            <Button className={classes.buttonStyles} onClick={e => dispatch(logoutUser())}>
              <LogOut />
            </Button>
          </Box>

          <Box className={classes.buttonWrapStyles} display={{ xs: 'flex', sm: 'none' }}>
            <Button className={classes.buttonStyles} onClick={onButtonClick}>
              {isModalOpen ? <CloseMenuSvg /> : <OpenMenuSvg />}
            </Button>
          </Box>

          {/* <div className={classes.buttonWrapStyles}>
            <Button className={classes.buttonStyles} onClick={onButtonClick}>
              {isModalOpen ? <CloseMenuSvg /> : <OpenMenuSvg />}
            </Button>
          </div> */}
        </Toolbar>
      </AppBar>
      {/* <Box p={3} display={{ xs: "block", sm: "none", md: "block" }}
       bgcolor="background.paper"
       >
Ghbjjhhhhb <Button/>
      </Box> */}
      <StylesModal className={classes.modalStyles} open={isModalOpen}>
        <Navigation className={classes.TestNav} />
        {isLogin ? (
          <div className={classes.buttonWrapStyles}>
            <Button
              className={classes.buttonStyles}
              //  onClick={dispatch(logoutUser())}
            >
              <LogOut />
            </Button>
          </div>
        ) : null}
      </StylesModal>
    </div>
  );
}
