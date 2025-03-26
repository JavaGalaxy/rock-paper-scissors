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
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playersMove, setPlayersMove] = useState<Move | null>(null);

  return (
    <div className="App">
      <div className="container">
        <h2>Computer chose: {computerMove}</h2>
      </div>
      <div className="container">
        <h2>Player chose: {playersMove}</h2>
      </div>
      <div className="container">
        <button onClick={() => setPlayersMove('rock')}>Rock</button>
        <button onClick={() => setPlayersMove('paper')}>Paper</button>
        <button onClick={() => setPlayersMove('scissors')}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
