import React from 'react';
import { Outlet } from '@remix-run/react';
import Document from '~/common/components/Document';
import SplitHeroPage from '~/common/components/SplitHeroPage';
import AuthIcon from '~/common/components/AuthIcon';
import { createUseStyles } from 'react-jss';

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

/**
 * Auth root component
 */
function Auth() {
  useStyles();

  return (
    <Document>
      <SplitHeroPage title="Education.io" hero={<AuthIcon />}>
        <Outlet />
      </SplitHeroPage>
    </Document>
  );
}

export default Auth;
