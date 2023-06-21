import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'stretch',
    height: '100%',
  },

  content: {
    // TODO: vertical alignment
    backgroundColor: '#fff',
    width: '50%',
    padding: '24px',
    flexGrow: 1,
  },

  hero: {
    // TODO: vertical alignment
    backgroundColor: '#dfe6e9',
    width: '50%',
    padding: '24px',
    flexGrow: 1,
  },

  innerContent: {},
});
