import React from 'react';
import { createUseStyles } from 'react-jss';
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

  return null;
}

export default React.memo(StyleBaseline);
