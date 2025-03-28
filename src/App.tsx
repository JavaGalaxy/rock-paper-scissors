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

type GameResults = { wins: number; losses: number; draws: number };

const getRandomMove = (): Move => {
  const index = Math.floor(Math.random() * MOVES.length);
  return MOVES[index];
};

function App() {
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const [playersMove, setPlayersMove] = useState<Move | null>(null);
  const [{ wins, losses, draws }, setGameResults] = useState<GameResults>({
    wins: 0,
    losses: 0,
    draws: 0,
  });
  const [result, setResult] = useState<string | null>(null);

  const handleMove = (move: Move) => {
    setPlayersMove(move);
    const computersMove = getRandomMove();
    setComputerMove(computersMove);

    const gameResult = checkWinner(move, computersMove);
    setResult(gameResult);
    setGameResults((prevState) => {
      if (gameResult === YOU_WIN) {
        return { ...prevState, wins: prevState.wins + 1 };
      } else if (gameResult === YOU_LOSE) {
        return { ...prevState, losses: prevState.losses + 1 };
      } else {
        return { ...prevState, draws: prevState.draws + 1 };
      }
    });
  };

  const resetGame = () => {
    setPlayersMove(null);
    setComputerMove(null);
  };

  const checkWinner = (playersMove: Move, computerMove: Move): string => {
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
      {playersMove ? (
        <>
          <div>
            Computer chose : <strong>{computerMove}</strong> You chose :{' '}
            <strong>{playersMove}</strong> | {result}
          </div>
          <div>
            Wins : {wins} / Losses : {losses} / Draws : {draws}
          </div>
          <div className="container">
            <button onClick={resetGame} className="reset_button">
              Play again
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="container">Your move!!</h2>
          <div className="container">
            <button onClick={() => handleMove('rock')}>{EMOJIS.rock}</button>
            <button onClick={() => handleMove('paper')}>{EMOJIS.paper}</button>
            <button onClick={() => handleMove('scissors')}>{EMOJIS.scissors}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
