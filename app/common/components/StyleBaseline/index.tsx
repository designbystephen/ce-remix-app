import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { createUseStyles } from 'react-jss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../styles/baseline.css';

const useStyles = createUseStyles({
  '@global': {
    html: {},
    body: {},
  },
});

/**
 * Baseline style component
 *  - imports a normalized baseline css
 *  - establishes some global styles for the app which can later be themed
 *
 * Typically used at the root of an application
 * @example
 * <App>
 *   <StyleBaseline />
 *   <Routes />
 * </App>
 */
function StyleBaseline() {
  useStyles();

  return (
    // use recommended MUI style baseline
    <CssBaseline />
  );
}

export default React.memo(StyleBaseline);
