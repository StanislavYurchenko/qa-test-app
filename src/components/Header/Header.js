import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from 'components/Navigation';
import { ReactComponent as LogoSvg } from '../../images/header_icons/logo.svg';
import { ReactComponent as OpenMenuSvg } from '../../images/header_icons/openMenu.svg';
import { ReactComponent as CloseMenuSvg } from '../../images/header_icons/closeMenu.svg';
import { ReactComponent as LogOut } from '../../images/header_icons/signOut.svg';
import { NavWrap, HeaderWrap, ButtonWrap, Logo, ButtonStyles, UserName } from './Header.style';
import { useStyles } from './Header.style';
import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';
import UserAvatar from '../UserAvatar';
import Toggle from '../Toggle/Toggle';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLoggedIn);

  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const classes = useStyles();

  // const avatarLetter = userName?.slice(0, 1).toUpperCase();

  // let mql = window.matchMedia('all and (min-width: 767px)');
  // console.log(mql);

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrap>
      <Toggle />
      <AppBar position="static" className={classes.headerStyles}>
        <Toolbar className={classes.toolBarStyles}>
          <Logo to="/" exact="true">
            <LogoSvg />
          </Logo>
          <NavWrap open={isModalOpen}>
            <Navigation isModalOpen={isModalOpen} onButtonClick={onButtonClick} />
            {isLogin && (
              <ButtonWrap toggle="true">
                <ButtonStyles onClick={e => dispatch(logoutUser())}>
                  <LogOut />
                </ButtonStyles>
              </ButtonWrap>
            )}
          </NavWrap>
          {isLogin && (
            <>
              {/* <UserAvatar /> */}
              <UserName>{userName}</UserName>
            </>
          )}

          {isLogin && (
            <ButtonWrap>
              <ButtonStyles onClick={e => dispatch(logoutUser())}>
                <LogOut />
              </ButtonStyles>
            </ButtonWrap>
          )}
          <ButtonWrap toggle="true">
            <ButtonStyles onClick={onButtonClick}>
              {isModalOpen ? <CloseMenuSvg /> : <OpenMenuSvg />}
            </ButtonStyles>
          </ButtonWrap>
        </Toolbar>
      </AppBar>
    </HeaderWrap>
  );
}
