import React from 'react';
import type { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import BrandHeader from '../BrandHeader';
import PageFooter from '../PageFooter';
import useStyles from './styles';

type SplitHeroPageProps = {
  title?: string;
  children: ReactNode;
  hero: ReactNode;
};

/**
 * Layout component for a split "hero" page with media taking up half of the screen and content on the other half
 */
function SplitHeroPage({ title, children, hero }: SplitHeroPageProps) {
  const classes = useStyles();

  // TODO: use breakpoints from MUI theme.breakpoints.up('md')
  const md = useMediaQuery('(min-width:1024px)');

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {/* Use title in header if provided otherwise we need an empty element to 'space-between' */}
        {title ? <BrandHeader title={title!} /> : <div />}

        <div className={classes.innerContent}>{children}</div>

        <PageFooter />
      </main>

      {md && <aside className={classes.hero}>{hero}</aside>}
    </div>
  );
}

export default React.memo(SplitHeroPage);
