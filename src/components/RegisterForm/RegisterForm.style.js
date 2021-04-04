import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '80%',
    marginBottom: 20,
    fontSize: '1.7rem',
  },
  buttonSubmit: {
    height: '40px',
    width: '80%',
    fontSize: '1.7rem',
  },
}));

export { useStyles };
