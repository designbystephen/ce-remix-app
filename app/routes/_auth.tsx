import React from 'react';
import { Outlet } from '@remix-run/react';
import Document from '~/common/components/Document';
import SplitHeroPage from '~/common/components/SplitHeroPage';

function Auth() {
  return (
    <Document>
      <SplitHeroPage title="My Company">
        <Outlet />
      </SplitHeroPage>
    </Document>
  );
}

export default Auth;
