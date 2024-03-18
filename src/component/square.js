import React from "react";
import { Button } from "@mui/material";

function Square({ value, onSquareClick, isWinningSquare }) {
  const squareStyle = {
    width: 100,
    height: 100,
    backgroundColor: isWinningSquare ? "yellow" : "red",
    color: isWinningSquare ? "black" : "white",
    fontSize: 50,
    border: "2px solid white",
  };

  return (
    <Button
      variant="outlined"
      style={squareStyle}
      onClick={onSquareClick}
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#b51307",
          transform: "scale(1.03)",
        },
      }}
    >
      {value?.charAt(0)}
    </Button>
  );
}

export default Square;
