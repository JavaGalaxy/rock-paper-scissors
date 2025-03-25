import { useState } from 'react';
import './App.css';

type Move = 'rock' | 'paper' | 'scissors';
const Moves: readonly Move[] = ['rock', 'paper', 'scissors'];

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * Moves.length);
  return Moves[index];
};

function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());

  return <div className="App">Computer move: {computerMove}</div>;
}

export default App;
