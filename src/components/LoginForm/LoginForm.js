import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import PreLoader from '../PreLoader';
import { loginUser } from '../../redux/auth/authOperations';
import { loading } from '../../redux/auth/authSelectors';
import { getTheme } from '../../redux/theme/themeSelectors';

import { useStyles, ButtonContainer, ActiveButton, NotActiveButton } from './LoginForm.style';

const LoginForm = ({ handleToggleButton }) => {
  const dispatch = useDispatch();
  const loadingAuth = useSelector(loading);
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);
  const { handleSubmit, control, reset } = useForm();
  const classes = useStyles(customTheme);
  const { t, i18n } = useTranslation();

  const validation = (value, num, text, email) => {
    if (email) {
      return !validateEmail(value) ? text : '';
    }
    return value.length < num ? text : '';
  };

  const validateEmail = email => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = data => {
    if (!validateEmail(data.email)) return;
    dispatch(loginUser(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <TextField
              className={classes.inputText}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              onChange={onChange}
              value={value}
              label="E-mail"
              variant="outlined"
              error={value.length !== 0 && !validateEmail(value) ? true : false}
              helperText={value.length !== 0 && !validateEmail(value) ? 'Enter correct email.' : ''}
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ minLength: 8 }}
          render={({ onChange, value }) => (
            <TextField
              className={classes.inputText}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              type="password"
              onChange={onChange}
              value={value}
              label="Password"
              variant="outlined"
              error={
                value.length !== 0 &&
                !!validation(value, 8, 'Password must be at least 8 characters.')
              }
              helperText={
                value.length !== 0 &&
                validation(value, 8, 'Password must be at least 8 characters.')
              }
              required
            />
          )}
        />

        <ButtonContainer>
          <ActiveButton type="submit" variant="contained" theme={customTheme}>
            {loadingAuth ? <PreLoader sizePreloader="16px" /> : t('login__loginSignIn')}
          </ActiveButton>
          <NotActiveButton type="button" onClick={handleToggleButton} theme={customTheme}>
            {t('login__loginSignUp')}
          </NotActiveButton>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default LoginForm;
