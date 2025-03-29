import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Rock Paper Scissors App', () => {
  test('renders Your move text', () => {
    render(<App />);
    const yourMoveElement = screen.getByText(/Your move!!/i);
    expect(yourMoveElement).toBeInTheDocument();
  });

  test('show game results', () => {
    render(<App />);
    expect(screen.queryByText(/Computer chose:/i)).not.toBeInTheDocument();

    const rockButton = screen.getByText('🪨');
    fireEvent.click(rockButton);
    expect(screen.getByText(/Computer chose:/i)).toBeInTheDocument();
    expect(screen.getByText(/You chose:/i)).toBeInTheDocument();

    const resultText = screen.getByText(/You win!|You lose!|It's a Tie/i);
    expect(resultText).toBeInTheDocument();
    expect(screen.getByText(/Play again/i)).toBeInTheDocument();
  });
});
