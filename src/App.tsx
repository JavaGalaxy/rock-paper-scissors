import { useState } from 'react';
import './App.css';

type Move = 'rock' | 'paper' | 'scissors';
const Moves: readonly Move[] = ['rock', 'paper', 'scissors'];

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * Moves.length);
  return Moves[index];
};

function App() {
  // eslint-disable-next-line
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playersMove, setPlayersMove] = useState<Move | null>(null);

  const handleClick = (move: Move) => {
    setPlayersMove(move);
  };

  return (
    <div className="App">
      Computer move: {computerMove}
      Player's move : {playersMove}
      <div>
        <button onClick={() => handleClick('rock')}>Rock</button>
        <button onClick={() => handleClick('paper')}>Paper</button>
        <button onClick={() => handleClick('scissors')}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
