import React from 'react';
import TextField from '@mui/material/TextField';

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
    <div>
      <div>
        <TextField
          id="FirstNameInput"
          name="firstName"
          label="First Name"
          variant="outlined"
          defaultValue={firstName}
        />
        <TextField
          id="LastNameInput"
          name="lastName"
          label="Last Name"
          variant="outlined"
          defaultValue={lastName}
        />
        <TextField
          id="EmailInput"
          name="email"
          label="Email"
          variant="outlined"
          defaultValue={email}
        />
        <TextField
          id="PasswordInput"
          name="password"
          label="Password"
          variant="outlined"
        />
      </div>

      <div>Here we go creating users.</div>
    </div>
  );
}

export default React.memo(CreateUser);
