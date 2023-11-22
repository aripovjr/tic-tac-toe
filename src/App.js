import Square from "./Square";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  return (
    <div className={style.App}>
      <Board />
    </div>
  );
}

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  const handleClick = (idx) => {
    if (square[idx] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[idx] = "X";
    } else {
      nextSquare[idx] = "O";
    }
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className={style.board}>
      <div className={style.status}>{status}</div>
      <div className={style.boardRow}>
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={style.boardRow}>
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={style.boardRow}>
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

const calculateWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }

  return null;
};

export default App;
