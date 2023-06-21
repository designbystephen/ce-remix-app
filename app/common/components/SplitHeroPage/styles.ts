import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'stretch',
    height: '100%',
  },

  content: {
    // TODO: vertical alignment
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '50%',
    padding: '24px',
    flexGrow: 1,
  },

  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe6e9',
    width: '50%',
    padding: '24px',
    flexGrow: 1,
  },

  innerContent: {
    marginTop: '24px',
    marginBottom: '24px',
  },
});
