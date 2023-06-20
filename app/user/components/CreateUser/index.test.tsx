/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import CreateUser from '.';

describe('CreateUser', () => {
  it('exists', () => {
    expect(CreateUser).toBeDefined();
  });

  it('renders', () => {
    render(<CreateUser />);
  });
});
