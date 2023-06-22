import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import type { UserInput } from '~/user/models';
import Subheader from '../../../common/components/Subheader';
import useStyles from './styles';

type CreateUserProps = {
  // optional props to ease the process of creating users from other sources
  firstName?: string;
  lastName?: string;
  email?: string;
  onSubmit?: () => void;
  register?: UseFormRegister<UserInput> | (() => void);
  hasErrors?: boolean;
  errors?: FieldErrors<UserInput>;
  disabled?: boolean;
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
  errors = {},
  hasErrors = false,
  disabled = false,
}: CreateUserProps) {
  const classes = useStyles();

  return (
    <form method="POST" onSubmit={onSubmit}>
      <div className={classes.root}>
        <Typography variant="h2" component="h2">
          Always nice to see a new face!
        </Typography>

        <Subheader 
          text="Please enter your details below to create an account with Education.io"
        />

        <div className={classes.inputs}>
          <TextField
            id="FirstNameInput"
            label="First Name"
            variant="outlined"
            defaultValue={firstName}
            fullWidth
            error={Boolean(errors?.firstName)}
            helperText={errors?.firstName?.message}
            {...register('firstName')}
          />
          <TextField
            id="LastNameInput"
            label="Last Name"
            variant="outlined"
            defaultValue={lastName}
            fullWidth
            error={Boolean(errors?.lastName)}
            helperText={errors?.lastName?.message}
            {...register('lastName')}
          />
          <TextField
            id="EmailInput"
            label="Email"
            variant="outlined"
            defaultValue={email}
            fullWidth
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
            {...register('email')}
          />
          <TextField
            id="PasswordInput"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
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
            disabled={disabled}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(CreateUser);
