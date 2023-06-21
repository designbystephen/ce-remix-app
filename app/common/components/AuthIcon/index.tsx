import React from 'react';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import useStyles from './styles';

function AuthIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SchoolSharpIcon fontSize="inherit" color="inherit" />
    </div>
  );
}

export default React.memo(AuthIcon);
