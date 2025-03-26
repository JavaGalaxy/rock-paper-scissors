import { useState } from 'react';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'] as const;
type Move = (typeof MOVES)[number];

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * MOVES.length);
  return MOVES[index];
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const [playersMove, setPlayersMove] = useState<Move | null>(null);

  const handlePlayersMove = (move: Move) => {
    setPlayersMove(move);
    setComputerMove(getRandomMove());
  };

  const resetGame = () => {
    setPlayersMove(null);
    setComputerMove(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Your move!!</h2>
      </div>
      {playersMove && (
        <div className="container">
          <h2>Player chose: {playersMove}</h2>
        </div>
      )}
      {computerMove && (
        <div className="container">
          <h2>Computer chose: {computerMove}</h2>
        </div>
      )}
      <div className="container">
        <button onClick={() => handlePlayersMove('rock')}>Rock</button>
        <button onClick={() => handlePlayersMove('paper')}>Paper</button>
        <button onClick={() => handlePlayersMove('scissors')}>Scissors</button>
      </div>
      {computerMove && (
        <div className="container">
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default App;
