import React from 'react';
import Typography from '@mui/material/Typography';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import useStyles from './styles';

type BrandHeaderProps = {
  title: string;
};

/**
 * A basic logo used for branding in headers/mastheads
 */
function BrandHeader({ title }: BrandHeaderProps) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <SchoolSharpIcon fontSize="inherit" color="inherit" />
      <Typography variant="overline" component="h3" className={classes.title}>
        {title}
      </Typography>
    </header>
  );
}

export default React.memo(BrandHeader);
