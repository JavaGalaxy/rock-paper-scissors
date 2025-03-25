import { useState } from 'react';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'] as const;
type Move = (typeof MOVES)[number];

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * MOVES.length);
  return MOVES[index];
};

function App() {
  // eslint-disable-next-line
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playersMove, setPlayersMove] = useState<Move | null>(null);

  return (
    <div className="App">
      <div>
        <h2>Computer chose: {computerMove}</h2>
      </div>
      <div>
        <h2>Player chose: {playersMove}</h2>
      </div>
      <div>
        <button onClick={() => setPlayersMove('rock')}>Rock</button>
        <button onClick={() => setPlayersMove('paper')}>Paper</button>
        <button onClick={() => setPlayersMove('scissors')}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
