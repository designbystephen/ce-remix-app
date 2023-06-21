import React from 'react';
import { Outlet } from '@remix-run/react';
import Document from '~/common/components/Document';
import SplitHeroPage from '~/common/components/SplitHeroPage';
import AuthIcon from '~/common/components/AuthIcon';

function Auth() {
  return (
    <Document>
      <SplitHeroPage title="Education.io" hero={<AuthIcon />}>
        <Outlet />
      </SplitHeroPage>
    </Document>
  );
}

export default Auth;
