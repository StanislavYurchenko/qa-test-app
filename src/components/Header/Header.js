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

import i18n from '../../i18n';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLoggedIn);
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const classes = useStyles();

  // const avatarLetter = userName?.slice(0, 1).toUpperCase();

  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeLanguage = language => {
    console.log('ww');
    i18n.changeLanguage(language);
  };

  return (
    <HeaderWrap>
      <button
        style={{ zIndex: 500, position: 'absolute', left: 24 }}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button style={{ zIndex: 500, position: 'absolute' }} onClick={() => changeLanguage('ru')}>
        RU
      </button>
      <Toggle />
      <HeaderStyle theme={customTheme} position="static">
        <Toolbar className={classes.toolBarStyles}>
          <Logo to="/" exact="true">
            <svg
              width="129"
              height="28"
              viewBox="0 0 129 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path d="M129 0H0V28H129V0Z" stroke={theme.LOGO_COLOR} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.9111 22.3H65.5181V20.224H63.5631V8.45999H65.5181V6.38599H60.9111V22.3ZM70.4821 19H73.2361V9.34399H77.0441V7.09999H66.6741V9.34399H70.4821V19ZM86.8701 14.461C86.8894 13.5848 86.6754 12.7193 86.2501 11.953C85.8506 11.2496 85.2574 10.6758 84.5411 10.3C83.7769 9.91565 82.9325 9.71765 82.077 9.72217C81.2216 9.72668 80.3793 9.9336 79.6191 10.326C78.8924 10.7121 78.2865 11.2914 77.8681 12C77.4391 12.7342 77.2185 13.5716 77.2301 14.422C77.2161 15.2765 77.4397 16.1182 77.8761 16.853C78.3156 17.575 78.9527 18.1559 79.7121 18.527C80.5639 18.9413 81.5021 19.147 82.4491 19.127C83.1484 19.1747 83.8496 19.0668 84.5021 18.8111C85.1547 18.5553 85.7425 18.1581 86.2231 17.648L84.8121 16.118C84.5182 16.409 84.1686 16.6375 83.7841 16.79C83.3784 16.938 82.9489 17.0099 82.5171 17.002C81.9017 17.0242 81.2949 16.8517 80.7831 16.509C80.3262 16.1922 80.0094 15.711 79.8991 15.166H86.8181C86.8521 14.724 86.8691 14.486 86.8691 14.452L86.8701 14.461ZM82.1271 11.724C82.6736 11.7074 83.2073 11.8917 83.6271 12.242C84.0394 12.5955 84.3059 13.0893 84.3751 13.628H79.8661C79.9313 13.0858 80.1983 12.588 80.6141 12.234C81.0407 11.8875 81.5779 11.7064 82.1271 11.724ZM92.2271 19.136C93.0161 19.153 93.8017 19.0291 94.5471 18.77C95.1299 18.5745 95.6454 18.2181 96.0341 17.742C96.3708 17.3101 96.5506 16.7766 96.5441 16.229C96.5781 15.659 96.3891 15.0982 96.0171 14.665C95.6805 14.3004 95.2518 14.0334 94.7761 13.892C94.1727 13.7221 93.5596 13.5885 92.9401 13.492C92.4439 13.4296 91.9545 13.3215 91.4781 13.169C91.3451 13.1356 91.2273 13.0581 91.1439 12.9491C91.0606 12.8401 91.0166 12.7061 91.0191 12.569C91.0252 12.4373 91.0683 12.31 91.1434 12.2017C91.2186 12.0935 91.3229 12.0086 91.4441 11.957C91.8432 11.7745 92.2811 11.6928 92.7191 11.719C93.6418 11.7115 94.5503 11.9459 95.3541 12.399L96.2381 10.512C95.7422 10.2343 95.2057 10.0365 94.6481 9.92599C94.0145 9.78492 93.3673 9.7135 92.7181 9.71299C91.9452 9.69615 91.1758 9.82296 90.4491 10.087C89.8727 10.2898 89.3657 10.6522 88.9871 11.132C88.6545 11.5754 88.4786 12.1167 88.4871 12.671C88.4483 13.2539 88.6405 13.8287 89.0221 14.271C89.3681 14.6383 89.8048 14.908 90.2881 15.053C90.8959 15.2263 91.5151 15.357 92.1411 15.444C92.6204 15.4902 93.0933 15.5871 93.5521 15.733C93.6802 15.7621 93.7948 15.8331 93.8779 15.9347C93.9611 16.0363 94.0079 16.1627 94.0111 16.294C94.0111 16.8493 93.4501 17.127 92.3281 17.127C91.7528 17.1243 91.1806 17.0415 90.6281 16.881C90.1068 16.7413 89.6085 16.5264 89.1491 16.243L88.2651 18.143C88.8011 18.473 89.387 18.7138 90.0001 18.856C90.7276 19.0435 91.4759 19.1379 92.2271 19.137V19.136ZM103.872 16.688C103.564 16.9194 103.186 17.0393 102.801 17.028C102.647 17.0379 102.492 17.015 102.347 16.9609C102.202 16.9068 102.069 16.8226 101.959 16.714C101.747 16.4668 101.639 16.1464 101.659 15.821V12.1H103.937V10.06H101.66V7.83099H99.0081V10.058H97.6001V12.1H99.0111V15.857C98.9793 16.3038 99.042 16.7523 99.1952 17.1733C99.3484 17.5942 99.5886 17.9781 99.9001 18.3C100.603 18.8932 101.507 19.1917 102.425 19.133C102.83 19.1348 103.233 19.086 103.625 18.988C103.971 18.9076 104.297 18.7605 104.586 18.555L103.872 16.688ZM105.826 20.53H114.326V19H105.826V20.53ZM120.24 22.3V6.38599H115.65V8.45999H117.588V20.224H115.65V22.3H120.24Z"
                  fill={theme.LOGO_COLOR}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H46.281L53.995 14.56L46.281 28H0V0Z"
                  fill={theme.LOGO_COLOR}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0621 7.10002H10.9111V19H13.6651V15.719H16.0651C17.0067 15.7413 17.9424 15.5648 18.8111 15.201C19.5433 14.8895 20.1661 14.3669 20.6001 13.7C21.0286 13.0158 21.2472 12.2211 21.2291 11.414C21.2489 10.6052 21.0301 9.80841 20.6001 9.12302C20.1615 8.45888 19.5383 7.93748 18.8071 7.62302C17.9398 7.25518 17.0039 7.07687 16.0621 7.10002ZM15.9091 13.475H13.6651V9.34402H15.9091C16.5827 9.29653 17.2517 9.48614 17.8001 9.88002C18.0186 10.0696 18.1905 10.307 18.3025 10.5737C18.4145 10.8404 18.4637 11.1293 18.4461 11.418C18.4627 11.7043 18.4131 11.9906 18.301 12.2545C18.189 12.5185 18.0176 12.7531 17.8001 12.94C17.2526 13.3326 16.5852 13.5219 15.9131 13.475H15.9091ZM26.0411 11.061V9.85402H23.5081V19H26.1601V14.682C26.1336 14.3362 26.1771 13.9887 26.2881 13.6601C26.3991 13.3316 26.5753 13.0288 26.8061 12.77C27.0458 12.5495 27.3273 12.3795 27.6339 12.2699C27.9405 12.1603 28.266 12.1134 28.5911 12.132C28.6931 12.132 28.8915 12.1434 29.1861 12.166V9.71802C28.5493 9.70581 27.9165 9.82142 27.3251 10.058C26.8122 10.2645 26.3676 10.611 26.0421 11.058L26.0411 11.061ZM35.5411 19.136C36.4388 19.1526 37.3266 18.9464 38.1251 18.536C38.8633 18.1536 39.4812 17.5742 39.9101 16.862C40.3465 16.1272 40.5701 15.2855 40.5561 14.431C40.571 13.5768 40.3484 12.7352 39.9131 12C39.4842 11.2878 38.8663 10.7084 38.1281 10.326C37.3231 9.9291 36.4377 9.72265 35.5401 9.72265C34.6426 9.72265 33.7571 9.9291 32.9521 10.326C32.2102 10.7065 31.5889 11.2861 31.1581 12C30.7218 12.7349 30.4981 13.5765 30.5121 14.431C30.4981 15.2856 30.7217 16.1272 31.1581 16.862C31.5889 17.5759 32.2102 18.1556 32.9521 18.536C33.7538 18.9458 34.644 19.1519 35.5441 19.136H35.5411ZM35.5411 16.96C35.228 16.9695 34.9164 16.913 34.6264 16.7943C34.3365 16.6757 34.0747 16.4974 33.8581 16.271C33.6313 16.0227 33.456 15.7318 33.3422 15.4153C33.2284 15.0988 33.1784 14.7629 33.1951 14.427C33.1784 14.0911 33.2284 13.7552 33.3422 13.4387C33.456 13.1222 33.6313 12.8314 33.8581 12.583C34.0748 12.3569 34.3366 12.1788 34.6265 12.0602C34.9165 11.9417 35.2281 11.8854 35.5411 11.895C35.8531 11.8849 36.1637 11.9409 36.4524 12.0595C36.7411 12.1781 37.0014 12.3565 37.2161 12.583C37.6693 13.0875 37.9044 13.7508 37.8701 14.428C37.9044 15.1053 37.6693 15.7685 37.2161 16.273C37.0015 16.4997 36.7412 16.6783 36.4525 16.7971C36.1638 16.9158 35.8532 16.9721 35.5411 16.962V16.96Z"
                  fill={theme.SECONDARY_TEXT_COLOR}
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="129" height="28" fill={theme.SECONDARY_TEXT_COLOR} />
                </clipPath>
              </defs>
            </svg>

            {/* <LogoSvg /> */}
          </Logo>
          <NavWrap theme={customTheme} open={isModalOpen}>
            <Navigation isModalOpen={isModalOpen} onButtonClick={onButtonClick} />
            {isLogin && (
              <ButtonWrap theme={customTheme} toggle="true" border="true">
                <ButtonStyles onClick={e => dispatch(logoutUser())}>
                  <LogOut fill={theme.PRIMARY_TEXT_COLOR} />
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
                <LogOut fill={theme.PRIMARY_TEXT_COLOR} />
              </ButtonStyles>
            </ButtonWrap>
          )}
          <ButtonWrap theme={customTheme} toggle="true">
            <ButtonStyles onClick={onButtonClick}>
              {isModalOpen ? (
                <CloseMenuSvg fill={theme.PRIMARY_TEXT_COLOR} />
              ) : (
                <OpenMenuSvg fill={theme.PRIMARY_TEXT_COLOR} />
              )}
            </ButtonStyles>
          </ButtonWrap>
        </Toolbar>
      </HeaderStyle>
    </HeaderWrap>
  );
}
