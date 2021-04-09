import styled from 'styled-components';
import {
  PRIMARY_TEXT_COLOUR,
  PAGE_BORDER_COLOUR,
  PAGE_BACKGROUND_COLOUR,
} from '../../themes/colors';
import { background } from '../../images/background/background';
import BREAKPOINT from '../../utils/breakpoints';

export const SectionStyle = styled.section`
  position: relative;
  top: 70px;
  margin: 0 auto;
  text-align: left;
  min-height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOUR};
  padding: 40px 20px;
  background-image: url(${background.bg_mob});
  background-size: cover;
  repeat: no-repeat;
  @media screen and (min-device-pixel-ratio: 2),
  screen and (-webkit-min-device-pixel-ratio: 2),
  screen and (-o-min-device-pixel-ratio: 2/1),
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  {
    background-image: url(${background.bg_mob2x});
  }

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    padding: 119px 115px;
    background-image: url(${background.bg_tab});

@media screen and (min-device-pixel-ratio: 2),
  screen and (-webkit-min-device-pixel-ratio: 2),
  screen and (-o-min-device-pixel-ratio: 2/1),
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  {
    background-image: url(${background.bg_tab2x});
  }
  }

  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    padding: 98px 190px;
    background-image: url(${background.bg_desk});

  @media screen and (min-device-pixel-ratio: 2),
  screen and (-webkit-min-device-pixel-ratio: 2),
  screen and (-o-min-device-pixel-ratio: 2/1),
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  {
    background-image: url(${background.bg_desk2x});
  }
  }
`;
