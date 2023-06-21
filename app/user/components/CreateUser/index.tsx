import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type CreateUserProps = {
  // optional props to ease the process of creating users from other sources
  firstName?: string;
  lastName?: string;
  email?: string;
};

/**
 * Create user component
 * @todo types could be an extension of User model
 * @todo storybook example here
 * @todo styling is 100% optional but 50% of the fun
 * @todo ideal password manager support
 * @todo required usability concerns a11y
 */
function CreateUser({ firstName, lastName, email }: CreateUserProps) {
  return (
    <Box maxWidth={500} margin="auto">
      <h1>Welcome</h1>
      <h3>Create a New User</h3>
      <div>
        <TextField
          sx={{ mb: 3 }}
          id="FirstNameInput"
          name="firstName"
          label="First Name"
          variant="outlined"
          defaultValue={firstName}
          fullWidth
        />
        <TextField
          sx={{ mb: 3 }}
          id="LastNameInput"
          name="lastName"
          label="Last Name"
          variant="outlined"
          defaultValue={lastName}
          fullWidth
        />
        <TextField
          sx={{ mb: 3 }}
          id="EmailInput"
          name="email"
          label="Email"
          variant="outlined"
          defaultValue={email}
          fullWidth
        />
        <TextField
          sx={{ mb: 3 }}
          id="PasswordInput"
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
      </div>

      <Box marginTop="24px">
        <Button variant="contained" fullWidth size="large">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default React.memo(CreateUser);
