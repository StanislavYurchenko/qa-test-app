let isDarkTheme = {
  a: '',
};

export const changeTheme = theme => {
  console.log('scasc', theme);
  if (theme === 'dark') {
    isDarkTheme.a = theme;
  }
  isDarkTheme.a = '';
  // console.log('dark', isDarkTheme);
};
console.log('dark', isDarkTheme);

const colours = {
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

const coloursDark = {
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

export const PRIMARY_TEXT_COLOUR = colours.colour1;
export const SECONDARY_TEXT_COLOUR = colours.colour2;
export const DARK_GREY_TEXT_COLOUR = colours.colour8;

export const BLACK = colours.colour1;
export const WHITE = colours.colour2;

export const ACCENT_COLOUR = colours.colour3;
export const LOGO_COLOUR = colours.colour4;

export const HEADER_BORDER_COLOUR = colours.colour5;
export const PAGE_BORDER_COLOUR = colours.colour10;

export const PAGE_BACKGROUND_COLOUR = true ? coloursDark.color6 : colours.colour6;
// export const PAGE_BACKGROUND_COLOUR = colours.colour6;

export const ACCENT_BACKGROUND_COLOUR = colours.colour9;

export const BAD_RESULT_COLOUR = colours.colour7;

export const LOGIN_TEXT_COLOUR = colours.colour11;
export const LOGIN_BORDER_COLOUR = colours.colour12;
export const LOGIN_BUTTON_BACKGROUND_COLOUR = colours.colour13;
