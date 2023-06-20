import React from 'react';

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
      <p>
        <input name="firstName" defaultValue={firstName} />
        <input name="lastName" defaultValue={lastName} />
        <input name="email" defaultValue={email} />
      </p>

      <div>Here we go creating users.</div>
    </div>
  );
}

export default React.memo(CreateUser);
