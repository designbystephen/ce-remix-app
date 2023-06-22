import React from 'react';
import { createUseStyles } from 'react-jss';
import CreateUserContainer from '~/user/components/CreateUserContainer';
import { redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import type { UserInput } from '~/user/models';

/**
 * Remix action to handle form post
 */
export const action: ActionFunction = async ({ request }) => {
  // get the form data from the request
  const form = await request.formData();

  // get all data from form entries
  const data = Object.fromEntries(form.entries()) as UserInput;


  console.table(data);

  // redirect to success page
  return redirect('/success', 201);
}

const useStyles = createUseStyles({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
    },
  },
});

function SignUp() {
  useStyles();

  return <CreateUserContainer />;
}

export default SignUp;
