import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from 'components/Navigation';
import { MainContainer } from 'components/Container/Container.style';
import { ReactComponent as LogoSvg } from '../../images/header_icons/logo.svg';
import { ReactComponent as OpenMenuSvg } from '../../images/header_icons/openMenu.svg';
import { ReactComponent as CloseMenuSvg } from '../../images/header_icons/closeMenu.svg';
import { ReactComponent as LogOut } from '../../images/header_icons/signOut.svg';
import { Modal, HeaderWrap, ButtonWrap, Logo, ButtonStyles, Span } from './Header.style';
import { useStyles } from './Header.style';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';

const TestNav = styled.p`
  color: black;
  font-size: 14px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    // <MainContainer>
    <HeaderWrap>
      <AppBar position="static" className={classes.headerStyles}>
        <Toolbar className={classes.toolBarStyles}>
          <Logo to="/" exact="true">
            <LogoSvg />
          </Logo>
          <Navigation className={classes.TestNav} />
          {/* <TestNav className={classes.TestNav}>Contacts</TestNav> */}
          {isLogin && <Span>D</Span>}

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
      <Modal open={isModalOpen}>
        <Navigation className={classes.TestNav} />
        {isLogin && (
          <ButtonWrap toggle="true">
            <ButtonStyles onClick={e => dispatch(logoutUser())}>
              <LogOut />
            </ButtonStyles>
          </ButtonWrap>
        )}
      </Modal>
    </HeaderWrap>
    //  </MainContainer>
  );
}
