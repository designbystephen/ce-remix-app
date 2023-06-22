import React from 'react';
import { redirect } from '@remix-run/node';
import type { V2_MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

// we are just redirecting to the evaluation for now
export const loader = () => redirect('/signup')

export const meta: V2_MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix!' },
];

/**
 * Route index or root of the application
 */
export default function Index() {
  return (

    <Outlet />
  );
}
