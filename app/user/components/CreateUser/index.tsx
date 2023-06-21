import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { UseFormRegister } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { UserInput } from '../CreateUserContainer';
import useStyles from './styles';

type CreateUserProps = {
  // optional props to ease the process of creating users from other sources
  firstName?: string;
  lastName?: string;
  email?: string;
  onSubmit?: () => void;
  register?: UseFormRegister<UserInput> | (() => void);
  hasErrors?: boolean;
  // fields: Record<string, RegisterOptions<UserInput>>;
};

/**
 * Create user component
 * @todo types could be an extension of User model
 * @todo storybook example here
 * @todo styling is 100% optional but 50% of the fun
 * @todo ideal password manager support
 * @todo required usability concerns a11y
 */
function CreateUser({
  firstName,
  lastName,
  email,
  onSubmit = () => {},
  register = () => {},
  hasErrors = false,
}: CreateUserProps) {
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
        <Typography variant="h2" component="h2">
          Always nice to see a new face!
        </Typography>

        <Box my={2} color="#777">
          <Typography component="h1" variant="h6" color="inherit">
            Please enter your details below to create an account with
            Education.io
          </Typography>
        </Box>

        <div className={classes.inputs}>
          <TextField
            id="FirstNameInput"
            label="First Name"
            variant="outlined"
            defaultValue={firstName}
            fullWidth
            {...register('firstName')}
          />
          <TextField
            id="LastNameInput"
            label="Last Name"
            variant="outlined"
            defaultValue={lastName}
            fullWidth
            {...register('lastName')}
          />
          <TextField
            id="EmailInput"
            label="Email"
            variant="outlined"
            defaultValue={email}
            fullWidth
            {...register('email')}
          />
          <TextField
            id="PasswordInput"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            {...register('password')}
          />
        </div>

        <div className={classes.c2a}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={onSubmit}
            color={hasErrors ? 'error' : 'primary'}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(CreateUser);
