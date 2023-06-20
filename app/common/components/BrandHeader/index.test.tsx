/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandHeader from '.';

describe('BrandHeader', () => {
  it('exists', () => {
    expect(BrandHeader).toBeDefined();
  });

  it('renders', () => {
    render(<BrandHeader title="Brand" />);
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(<BrandHeader title="Brand" />);
    });

    it('contains a banner element', () => {
      expect(screen.getByRole('banner')).toBeDefined();
    });
  });
});
