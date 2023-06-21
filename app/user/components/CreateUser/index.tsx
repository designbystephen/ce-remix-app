import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import type { UseFormRegister } from 'react-hook-form';
import type { UserInput } from '../CreateUserContainer';
import useStyles from './styles';

type CreateUserProps = {
  // optional props to ease the process of creating users from other sources
  firstName?: string;
  lastName?: string;
  email?: string;
  onSubmit?: () => void;
  register: UseFormRegister<UserInput>;
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
  register,
  hasErrors = false,
}: CreateUserProps) {
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <Box maxWidth={500} margin="auto">
        <h1>Welcome</h1>
        <h3>Create a New User</h3>

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

        <Box marginTop="24px">
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={onSubmit}
            color={hasErrors ? 'error' : 'primary'}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default React.memo(CreateUser);
