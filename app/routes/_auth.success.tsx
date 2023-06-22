import React from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import Subheader from '~/common/components/Subheader';
import db from '~/utils/db';
import { UserModel } from '~/user/models';
import type { User } from '~/user/models';
import { Box, Typography } from '@mui/material';

/**
 * Remix loader function
 */
export const loader: LoaderFunction = async ({ request }) => {
  /**
   * IMPORTANT:
   * This is NOT a pattern I would use in production as it could expose user data.
   * It is instead show that a entry was created in the database and we have access to it
   *
   * If this were production I would just send the pertinent information back in session, or even in the query string.
   *
   */

  // get the user id from search params
  const userId = new URL(request.url).searchParams.get('user');

  // don't bother connecting if we don't have a user id
  if (!userId) return {};

  const { connect } = await db();
  connect();

  // find the user by id in the database
  const doc = await UserModel.findById(userId).exec();

  if (!doc) return {};

  return {
    firstName: doc.firstName || '',
    email: doc.email || '',
  };
};

/**
 * Simple success message
 * @todo would like to get data via useLoaderData amd display it here to close the circuit
 */
function Success() {
  const { firstName, email } = useLoaderData<Partial<User>>();

  return (
    <>
      {Boolean(firstName) && (
        <Typography variant="h4" component="h6">
          {firstName},
        </Typography>
      )}

      <Box my={4}>
        <Typography variant="h3" component="h1">
          Thanks for joining education.io!
        </Typography>
      </Box>

      <Subheader text={`Check your email (${email}) for next steps!`} />

      <Outlet />
    </>
  );
}

export default Success;
