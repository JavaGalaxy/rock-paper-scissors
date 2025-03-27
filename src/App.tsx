import { useState } from 'react';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'] as const;
type Move = (typeof MOVES)[number];
const EMOJIS = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️',
};
const YOU_WIN = 'You win!';
const YOU_LOSE = 'You lose!';
const TIE = "It's a Tie";

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * MOVES.length);
  return MOVES[index];
};

function App() {
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
        throw new Error(`Invalid move : ${playersMove}`);
    }
  };

  return (
    <div className="App">
      <h2 className="container">Your move!!</h2>

      {playersMove ? (
        <>
          <h2 className="container">Computer chose: {computerMove}</h2>
          <h2 className="container">Player chose: {playersMove}</h2>
          <h2>{checkWinner()}</h2>
          <div className="container">
            <button onClick={resetGame} className="reset_button">
              Play again
            </button>
          </div>
        </>
      ) : (
        <div className="container">
          <button onClick={() => handlePlayersMove('rock')}>{EMOJIS.rock}</button>
          <button onClick={() => handlePlayersMove('paper')}>{EMOJIS.paper}</button>
          <button onClick={() => handlePlayersMove('scissors')}>{EMOJIS.scissors}</button>
        </div>
      )}
    </div>
  );
}

export default App;
