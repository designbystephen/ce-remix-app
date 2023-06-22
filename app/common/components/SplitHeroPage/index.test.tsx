/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import SplitHeroPage from '.';

// dependency injection to cover the lack of useMediaQuery in the unit test
// this things can and should be covered if they are important to site functionality in integrated testing
jest.mock('@mui/material/useMediaQuery', () => jest.fn().mockReturnValue(true));

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
