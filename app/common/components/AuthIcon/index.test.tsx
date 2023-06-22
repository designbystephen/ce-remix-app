/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthIcon from '.';

describe('AuthIcon', () => {
  it('exists', () => {
    expect(AuthIcon).toBeDefined();
  });

  it('renders', () => {
    render(
      <AuthIcon />
    );
  });

  describe('when rendering', () => {
    beforeEach(() => {
      render(
        <AuthIcon />
      )
    });

    it('contains icon', () => {
      // better ways to do this but I do want to validate that we are using this svg
      expect(screen.getByTestId('SchoolSharpIcon')).toBeDefined();
    });
  });
});
