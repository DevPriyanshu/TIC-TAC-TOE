import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import Board from "./board";
import { calculateWinningLine } from "./board";

function Game({ players }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const firstPlayerIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [countdown, setCountdown] = useState(3);
  const [winningLine, setWinningLine] = useState(null);

  function handlePlay(nextSquares) {
    const winner = calculateWinner(nextSquares);
    if (winner) {
      const lines = calculateWinningLine(nextSquares);
      setWinningLine(lines);
    }
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handlePlayAgain() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setCountdown(3);
    setWinningLine(null);
  }

  useEffect(() => {
    if (countdown > 0) {
      const countdownTimer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(countdownTimer);
    }
  }, [countdown]);

  return (
    <>
      {countdown > 0 ? (
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          {countdown}
        </Typography>
      ) : (
        <Board
          handlePlayAgain={handlePlayAgain}
          firstPlayerIsNext={firstPlayerIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          players={players}
          winningLine={winningLine}
        />
      )}
    </>
  );
}

export function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(square => square !== null)) {
    return 'draw'; // If all squares are filled but no winner, it's a draw
  }
  return null;
}

export default Game;
