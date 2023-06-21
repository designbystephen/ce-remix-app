import React from 'react';
// import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
// import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
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
