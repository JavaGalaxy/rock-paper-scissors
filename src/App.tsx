import { useState } from 'react';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'] as const;
type Move = (typeof MOVES)[number];

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * MOVES.length);
  return MOVES[index];
};

function App() {
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const [playersMove, setPlayersMove] = useState<Move | null>(null);
  const YOU_WIN = 'You win!';
  const YOU_LOSE = 'You lose!';
  const TIE = "It's a Tie";

  const handlePlayersMove = (move: Move) => {
    setPlayersMove(move);
    setComputerMove(getRandomMove());
  };

  const resetGame = () => {
    setPlayersMove(null);
    setComputerMove(null);
  };

  const checkWinner = () => {
    if (playersMove === computerMove) {
      return TIE;
    }

    switch (playersMove) {
      case 'rock':
        return computerMove === 'scissors' ? YOU_WIN : YOU_LOSE;
      case 'paper':
        return computerMove === 'rock' ? YOU_WIN : YOU_LOSE;
      case 'scissors':
        return computerMove === 'paper' ? YOU_WIN : YOU_LOSE;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Your move!!</h2>
      </div>
      {computerMove && (
        <div className="container">
          <h2>Computer chose: {computerMove}</h2>
        </div>
      )}
      {playersMove && (
        <div className="container">
          <h2>Player chose: {playersMove}</h2>
        </div>
      )}
      {computerMove && playersMove && (
        <div>
          <h2>{checkWinner()}</h2>
        </div>
      )}
      {!playersMove && (
        <div className="container">
          <button onClick={() => handlePlayersMove('rock')}>Rock</button>
          <button onClick={() => handlePlayersMove('paper')}>Paper</button>
          <button onClick={() => handlePlayersMove('scissors')}>Scissors</button>
        </div>
      )}
      {computerMove && (
        <div className="container">
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default App;
