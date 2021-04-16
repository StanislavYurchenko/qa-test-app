import styled from 'styled-components';
import { background } from '../../images/background/background';
import BREAKPOINT from '../../utils/breakpoints';

export const SectionStyle = styled.section`
  margin: 0 auto;
  text-align: left;
  min-height: calc(100vh - (71px + 56px));
  padding: 40px 20px;
  background-image: url(${background.bg_mob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;

  @media screen and (min-width: ${BREAKPOINT.TABLET}) {
    padding: 119px 115px;
    background-image: url(${background.bg_tab});
  }

  @media screen and (min-width: ${BREAKPOINT.DESKTOP}) {
    padding: 98px 190px;
    background-image: url(${background.bg_desk});
  }

  @media (min-resolution: 192dpi) and (max-width: ${BREAKPOINT.MOBILE_MAX}) {
    background-image: url(${background.bg_mob2x});
  }
  @media (min-resolution: 192dpi) and (min-width: ${BREAKPOINT.TABLET}) {
    background-image: url(${background.bg_tab2x});
  }
  @media (min-resolution: 192dpi) and (min-width: ${BREAKPOINT.DESKTOP}) {
    background-image: url(${background.bg_desk2x});
  }
`;
