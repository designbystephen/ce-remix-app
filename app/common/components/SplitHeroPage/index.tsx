import React from 'react';
import type { ReactNode } from 'react';
import BrandHeader from '../BrandHeader';
import PageFooter from '../PageFooter';
import useStyles from './styles';

type SplitHeroPageProps = {
  title: string;
  children: ReactNode;
};

function SplitHeroPage({ title, children }: SplitHeroPageProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <BrandHeader title={title} />

        <div className={classes.innerContent}>{children}</div>

        <PageFooter />
      </main>
      <aside className={classes.hero} />
    </div>
  );
}

export default React.memo(SplitHeroPage);
