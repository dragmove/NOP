import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

describe('AuthPage', () => {
  it('render email input', async () => {
    render(<AuthPage />);
    expect(screen.getByTestId('email')).toBeInTheDocument();
  });

  it('render password input', async () => {
    render(<AuthPage />);
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });
});
