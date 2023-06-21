import React from 'react';
import { createUseStyles } from 'react-jss';
import CreateUserContainer from '~/user/components/CreateUserContainer';

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

function SignUp() {
  useStyles();

  return <CreateUserContainer />;
}

export default SignUp;
