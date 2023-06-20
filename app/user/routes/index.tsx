import React from 'react';
import type { V2_MetaFunction } from '@remix-run/node';
import CreateUserContainer from '../components/CreateUserContainer';

/**
 * @todo need to understand formatting and functional usage for meta function and etc
 * @returns
 */
export const meta: V2_MetaFunction = () => [
  { title: 'Create a New User' },
  { name: 'description', content: 'Welcome to Remix!' },
];

function UserRoutes() {
  return <CreateUserContainer />;
}

export default UserRoutes;
