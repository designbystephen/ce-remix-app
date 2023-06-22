/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Subheader from '.';

describe('Subheader', () => {
  it('exists', () => {
    expect(Subheader).toBeDefined();
  });

  it('renders', () => {
    render(
      <Subheader text="hey there" />
    );
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(
        <Subheader text="hey there" />
      )
    });

    it('contains content', () => {
      expect(screen.getByRole('heading')).toBeDefined();
      expect(screen.getByText('hey there')).toBeDefined();
    });
  });
});
