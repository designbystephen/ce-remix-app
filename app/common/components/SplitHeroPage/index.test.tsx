/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import SplitHeroPage from '.';

describe('SplitHeroPage', () => {
  it('exists', () => {
    expect(SplitHeroPage).toBeDefined();
  });

  it('renders', () => {
    render(
      <SplitHeroPage hero={<img src="" alt="hero" />}>
        hey there
      </SplitHeroPage>
    );
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(
      <SplitHeroPage hero={<img src="" alt="hero" />}>
        hey there
      </SplitHeroPage>);
    });

    it('contains content', () => {
      expect(screen.getByAltText('hero')).toBeDefined();
      expect(screen.getByText('hey there')).toBeDefined();
    });
  });
});
