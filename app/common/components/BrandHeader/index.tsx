import React from 'react';
import useStyles from './styles';

type BrandHeaderProps = {
  title: string;
};

function BrandHeader({ title }: BrandHeaderProps) {
  const classes = useStyles();

  return <header className={classes.root}>{title}</header>;
}

export default React.memo(BrandHeader);
