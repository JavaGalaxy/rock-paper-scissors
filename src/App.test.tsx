import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Rock Paper Scissors App', () => {
  test('renders computer move text', () => {
    render(<App />);
    const computerMoveElement = screen.getByText(/Computer chose:/i);
    expect(computerMoveElement).toBeInTheDocument();
  });
});
