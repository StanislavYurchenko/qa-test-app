import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { PAGE_BACKGROUND_COLOUR, HEADER_BORDER_COLOUR } from '../../themes/colors';

export const StylesModal = styled(Box)`
  right: ${props => (props.open ? 0 : '-100%')};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6fb;
  padding: 26px 0;
  text-align: center;
  transition: all 0.5s linear;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    maxWidth: '1280px',
    width: '100%',
    zIndex: 100,
  },
  headerStyles: {
    boxShadow: 'none',
    backgroundColor: '#f5f6fb',
    borderBottom: `1px solid ${HEADER_BORDER_COLOUR}`,
    zIndex: 11,
  },
  logoStyles: {
    display: 'block',
    width: '129px',
    height: '28px',
    marginRight: 'auto',
  },
  toolBarStyles: {
    minHeight: '70px',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: 0,
  },
  buttonWrapStyles: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '55px',
    minHeight: '70px',
    borderLeft: `1px solid ${HEADER_BORDER_COLOUR}`,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  buttonWrapStylesClose: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '55px',
    minHeight: '70px',
    borderLeft: `1px solid ${HEADER_BORDER_COLOUR}`,
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  buttonStyles: {
    width: '15px',
    height: '15px',
    padding: 0,
    minWidth: 0,
  },
  modalStyles: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
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
  spanStyles: {
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

export { useStyles };
