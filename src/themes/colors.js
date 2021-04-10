// import { useSelector } from 'react-redux';
// import { getTheme } from '../redux/theme/themeSelectors';

// const theme = useSelector(getTheme);

let selectedColors;

export const colorsLight = {
  colour1: '#000000',
  colour2: '#FFFFFF',
  colour3: '#FF6B09',
  colour4: '#121D2E',
  colour5: '#E2E3E5',
  colour6: '#F5F6FB',
  colour7: '#D7D7D7',
  colour8: '#555555',
  colour9: '#02172A',
  colour10: '#00122F',
  colour11: '#BBBBBB',
  colour12: '#CED2D1',
  colour13: '#FAFAFA',
};

export const colorsDark = {
  colour1: '#808080',
  colour2: '#A65353',
  colour3: '#FF6B09',
  colour4: '#526C97',
  colour5: '#E2E3E5',
  colour6: '#496395',
  colour7: '#818181',
  colour8: '#AAAAAA',
  colour9: '#477094',
  colour10: '#265297',
  colour11: '#707070',
  colour12: '#436289',
  colour13: '#A35151',
};

const getColors = colors => {
  return {
    PRIMARY_TEXT_COLOUR: colors.colour1,
    SECONDARY_TEXT_COLOUR: colors.colour2,
    DARK_GREY_TEXT_COLOUR: colors.colour8,
    BLACK: colors.colour1,
    WHITE: colors.colour2,
    ACCENT_COLOUR: colors.colour3,
    LOGO_COLOUR: colors.colour4,
    HEADER_BORDER_COLOUR: colors.colour5,
    PAGE_BORDER_COLOUR: colors.colour10,
    PAGE_BACKGROUND_COLOUR: colors.colour6,
    ACCENT_BACKGROUND_COLOUR: colors.colour9,
    BAD_RESULT_COLOUR: colors.colour7,
    LOGIN_TEXT_COLOUR: colors.colour11,
    LOGIN_BORDER_COLOUR: colors.colour12,
    LOGIN_BUTTON_BACKGROUND_COLOUR: colors.colour13,
  };
};

// switch (theme) {
//   case 'light':
//     selectedColors = colorsLight;
//     break;

//   case 'dark':
//     selectedColors = colorsDark;
//     break;

//   default:
//     selectedColors = colorsLight;
// }

const {
  PRIMARY_TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  DARK_GREY_TEXT_COLOUR,
  BLACK,
  WHITE,
  ACCENT_COLOUR,
  LOGO_COLOUR,
  HEADER_BORDER_COLOUR,
  PAGE_BORDER_COLOUR,
  PAGE_BACKGROUND_COLOUR,
  ACCENT_BACKGROUND_COLOUR,
  BAD_RESULT_COLOUR,
  LOGIN_TEXT_COLOUR,
  LOGIN_BORDER_COLOUR,
  LOGIN_BUTTON_BACKGROUND_COLOUR,
} = getColors(colorsLight);

export {
  PRIMARY_TEXT_COLOUR,
  SECONDARY_TEXT_COLOUR,
  DARK_GREY_TEXT_COLOUR,
  BLACK,
  WHITE,
  ACCENT_COLOUR,
  LOGO_COLOUR,
  HEADER_BORDER_COLOUR,
  PAGE_BORDER_COLOUR,
  PAGE_BACKGROUND_COLOUR,
  ACCENT_BACKGROUND_COLOUR,
  BAD_RESULT_COLOUR,
  LOGIN_TEXT_COLOUR,
  LOGIN_BORDER_COLOUR,
  LOGIN_BUTTON_BACKGROUND_COLOUR,
};

// let isDarkTheme = {
//   a: '',
// };

// export const changeTheme = theme => {
//   console.log('scasc', theme);
//   if (theme === 'dark') {
//     isDarkTheme.a = theme;
//   }
//   isDarkTheme.a = '';
//   // console.log('dark', isDarkTheme);
// };
// console.log('dark', isDarkTheme);
