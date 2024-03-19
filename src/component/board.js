import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import Animation from "./animation.js";
import Square from "./square.js";
import { calculateWinner } from "./game";

function Board({
  firstPlayerIsNext,
  squares,
  onPlay,
  players,
  handlePlayAgain,
  winningLine,
}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (firstPlayerIsNext) {
      nextSquares[i] = players[0];
    } else {
      nextSquares[i] = players[1];
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status =
      "It's your move," + (firstPlayerIsNext ? players[0] : players[1]) + " !";
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h2"
        sx={{
          color: winner ? "green" : "white",
          fontFamily: "cursive",
          marginBottom: 10,
        }}
      >
        {status} {winner && "🍻"}
      </Typography>

      {winner && <Animation />}

      <Grid container spacing={1} justifyContent="center">
        {[0, 1, 2].map((row) => (
          <Grid
            spacing={1}
            key={row}
            container
            item
            xs={12}
            md={12}
            justifyContent="center"
          >
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              const isWinningSquare =
                winningLine && winningLine.includes(index);
              return (
                <Square
                  key={col}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  isWinningSquare={isWinningSquare}
                />
              );
            })}
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        disabled={!winner}
        sx={{
          backgroundColor: "red",
          marginTop: 10,
          fontSize: "1.1rem",
          "&:hover": {
            backgroundColor: "#b51307",
          },
        }}
        onClick={handlePlayAgain}
        startIcon={<ExtensionIcon />}
      >
        Play Again
      </Button>
    </Box>
  );
}

export function calculateWinningLine(squares) {
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
      return lines[i];
    }
  }
  return null;
}

export default Board;
