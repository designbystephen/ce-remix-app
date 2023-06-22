import React from 'react';
import CreateUserContainer from '~/user/components/CreateUserContainer';
import { redirect } from '@remix-run/node';
import type {
  ActionFunction,
  HandleErrorFunction,
  V2_MetaFunction,
} from '@remix-run/node';
import { Link } from '@remix-run/react';
import schema from '~/user/utils/form';
import { UserModel, type UserInput } from '~/user/models';
import db from '~/utils/db';

/**
 * Save user to database
 * @todo could move this to a module for testing purposes but we are already testing this path elsewhere
 */
async function SaveUser(input: UserInput) {
  /**
   * IMPORTANT:
   * I would never do this in production as we are storing plaintext passswords and PII about this user.
   *
   * I would also recommend that trusted and well vetted OAuth solutions be used in place of creating users this way.
   * My personal choice would be to setup Cognito in AWS and then create our own User entity.
   * This way we can utilize an eventbus to send confirmation emails, and create the cognito users with the provided information
   */

  try {
    const { connect } = await db();
    connect();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const doc = await UserModel.create(input);
    await doc.save();

    console.table(doc);

    return doc;
  } catch (ex) {
    console.error(ex);
    throw new Error('Error creating user record');
  }
}

/**
 * SignUp component which is using a container from our user domain/entity
 * - everything user related should go there
 * - actions, error boundaries and everything server/route related lives here
 */
function SignUp() {
  return <CreateUserContainer />;
}

/**
 * Set meta for this route
 */
export const meta: V2_MetaFunction = () => [
  { name: 'description', content: 'Signup for access to education.io!' },
];

/**
 * Remix action to handle form post
 */
export const action: ActionFunction = async ({ request }) => {
  // get the form data from the request
  const form = await request.formData();

  // get all data from form entries asserting UserInput as type
  const data = Object.fromEntries(form.entries()) as UserInput;

  // validate the data on the server side... just in case we post here from somewhere else
  // ideally we would want this to keep the user on the same page instead of catching the route error boundary
  await schema.validate(data);

  // leaving this here for demonstration purposes
  // eslint-disable-next-line no-console
  console.table(data);

  // attempt to save the use to the db
  const user = await SaveUser(data);

  // redirect to success page
  // eslint-disable-next-line no-underscore-dangle
  return redirect(`/success?user=${user._id}`);
};

/**
 * Error boundary that will render if there are any errors detected in
 * @todo should add realistic boundary logic here
 * @todo move the current error boundary to common component
 *
 * @example
 * // you can cause this error boundary to trip if you throw an error during the request, like in the action
 * throw new Error()
 */
export function ErrorBoundary({ 0: error }: Parameters<HandleErrorFunction>) {
  // leaving this here for demonstration purposes
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div>
      <h1>Something Went Wrong!</h1>
      <Link to="/signup">Try Again</Link>
    </div>
  );
}

export default SignUp;
