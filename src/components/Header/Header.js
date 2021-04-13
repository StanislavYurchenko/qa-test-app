import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from 'components/Navigation';
import { ReactComponent as LogoSvg } from '../../images/header_icons/logo.svg';
import { ReactComponent as OpenMenuSvg } from '../../images/header_icons/openMenu.svg';
import { ReactComponent as CloseMenuSvg } from '../../images/header_icons/closeMenu.svg';
import { ReactComponent as LogOut } from '../../images/header_icons/signOut.svg';
import {
  HeaderStyle,
  NavWrap,
  HeaderWrap,
  ButtonWrap,
  Logo,
  ButtonStyles,
  UserName,
} from './Header.style';
import { useStyles } from './Header.style';
import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';
import UserAvatar from '../UserAvatar';
import Toggle from '../Toggle/Toggle';

import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLoggedIn);
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  console.log(customTheme);

  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const classes = useStyles();

  // const avatarLetter = userName?.slice(0, 1).toUpperCase();

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrap>
      <Toggle />
      <HeaderStyle theme={customTheme} position="static">
        <Toolbar className={classes.toolBarStyles}>
          <Logo to="/" exact="true">
            <LogoSvg />
          </Logo>
          <NavWrap theme={customTheme} open={isModalOpen}>
            <Navigation isModalOpen={isModalOpen} onButtonClick={onButtonClick} />
            {isLogin && (
              <ButtonWrap theme={customTheme} toggle="true">
                <ButtonStyles onClick={e => dispatch(logoutUser())}>
                  <LogOut />
                </ButtonStyles>
              </ButtonWrap>
            )}
          </NavWrap>
          {isLogin && (
            <>
              {/* <UserAvatar /> */}
              <UserName theme={customTheme}>{userName}</UserName>
            </>
          )}

          {isLogin && (
            <ButtonWrap theme={customTheme}>
              <ButtonStyles onClick={e => dispatch(logoutUser())}>
                <LogOut />
              </ButtonStyles>
            </ButtonWrap>
          )}
          <ButtonWrap theme={customTheme} toggle="true">
            <ButtonStyles onClick={onButtonClick}>
              {isModalOpen ? <CloseMenuSvg /> : <OpenMenuSvg />}
            </ButtonStyles>
          </ButtonWrap>
        </Toolbar>
      </HeaderStyle>
    </HeaderWrap>
  );
}
