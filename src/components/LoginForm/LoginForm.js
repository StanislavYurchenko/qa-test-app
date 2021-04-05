import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './LoginForm.style';

const LoginForm = ({ handleToggleButton }) => {
  const { handleSubmit, control, reset } = useForm();
  const classes = useStyles();

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
    console.log(data);
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

        <Button type="submit" variant="contained">
          SIGN IN
        </Button>
        <Button type="button" onClick={handleToggleButton}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;