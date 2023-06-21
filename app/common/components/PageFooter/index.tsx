import React from 'react';
import useStyles from './styles';

/**
 * Generic page footer
 */
function PageFooter() {
  const classes = useStyles();

  return (
    <footer role="contentinfo" className={classes.root}>
      <p>A totally not real thing I made up for this exercise.</p>
      <p>&copy; 2023 education.io</p>
    </footer>
  );
}

export default React.memo(PageFooter);
