import React from 'react';
import useStyles from './styles';

function PageFooter() {
  const classes = useStyles();

  return (
    <footer role="contentinfo" className={classes.root}>
      {'&copy;'} some guy
    </footer>
  );
}

export default React.memo(PageFooter);
