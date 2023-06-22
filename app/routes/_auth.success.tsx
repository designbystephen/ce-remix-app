import React from 'react';
import { Outlet } from '@remix-run/react';
import Subheader from '~/common/components/Subheader';

/**
 * Simple success message
 * @todo would like to get data via useLoaderData amd display it here to close the circuit
 */
function Success() {
  return (
    <>
      <h1>Thanks for joining education.io!</h1>
      <Subheader text="Check your email for next steps!" />
      <Outlet />
    </>
  );
}

export default Success;
