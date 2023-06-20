/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import PageFooter from '.';

describe('PageFooter', () => {
  it('exists', () => {
    expect(PageFooter).toBeDefined();
  });

  it('renders', () => {
    render(<PageFooter />);
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(<PageFooter />);
    });

    it('contains a footer element', () => {
      expect(screen.getByRole('contentinfo')).toBeDefined();
    });
  });
});
