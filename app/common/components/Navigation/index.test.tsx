/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '.';

describe('Navigation', () => {
  it('exists', () => {
    expect(Navigation).toBeDefined();
  });

  it('renders', () => {
    render(<Navigation />);
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(<Navigation />);
    });

    it('contains a navigation element', () => {
      expect(screen.getByRole('navigation')).toBeDefined();
    });
  });
});
