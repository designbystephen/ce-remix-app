import React from 'react';
import type { V2_MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import StyleBaseline from '~/common/components/StyleBaseline';
// import UserRoutes from '~/user/routes';

export const meta: V2_MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix!' },
];

/**
 * Route index or root of the application
 */
export default function Index() {
  return (
    <>
      <StyleBaseline />
      <Outlet />
    </>
  );
}
