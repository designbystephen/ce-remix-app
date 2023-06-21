import React from 'react';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

type BrandHeaderProps = {
  title: string;
};

function BrandHeader({ title }: BrandHeaderProps) {
  const classes = useStyles();

  return (
    <Typography variant="overline" component="h3" className={classes.root}>
      {title}
    </Typography>
  );
}

export default React.memo(BrandHeader);
