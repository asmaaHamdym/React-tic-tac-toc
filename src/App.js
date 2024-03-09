import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
};
export default function Board() {
  const handleSquareClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  const [squares, setSquares] = useState(Array(9));
  return (
    <>
      <div className="board-row">
        <Square onSquareClick={() => handleSquareClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleSquareClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleSquareClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleSquareClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleSquareClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleSquareClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleSquareClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleSquareClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleSquareClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
