import React from 'react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import StyleBaseline from '~/common/components/StyleBaseline';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <>
      <StyleBaseline />
      <Outlet />
    </>
  );
}
