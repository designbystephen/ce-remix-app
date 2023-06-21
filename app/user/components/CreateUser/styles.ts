import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    margin: 'auto',
    maxWidth: '500px',
  },

  inputs: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
    justifyContent: 'space-around',
    paddingTop: '24px',
    paddingBottom: '24px',

    '& > *': {
      display: 'block',
    },
  },

  c2a: {
    marginTop: '24px',
  },
});
