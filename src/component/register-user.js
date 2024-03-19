import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Game from "./game";
import GroupIcon from "@mui/icons-material/Group";
import Footer from "./footer";

function RegisterUser() {
  const [players, setPlayers] = useState([]);
  const [isPlayerCreated, setIsPlayerCreated] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  const handleFirstPlayerChange = (event) => {
    const firstPlayer = event.target.value;
    setPlayers((prevPlayers) => [firstPlayer, prevPlayers[1]]);
  };

  const handleSecondPlayerChange = (event) => {
    const secondPlayer = event.target.value;
    setPlayers((prevPlayers) => [prevPlayers[0], secondPlayer]);
  };

  const handleCreatePlayer = () => {
    if (
      players.length === 2 &&
      players.every((player) => player.trim() !== "")
    ) {
      setIsPlayerCreated(true);
    } else {
      setValidationMsg("Please ensure that both player names are filled.");
    }
  };

  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="100vw"
      >
        {isPlayerCreated ? (
          <Game players={players} />
        ) : (
          <Stack
            backgroundColor="white"
            direction="column"
            spacing={2}
            alignItems="center"
            padding={5}
            borderRadius={10}
          >
            <Typography variant="h6" sx={{ fontFamily: "cursive" }}>
              {"TIC TAC TOE GAME"}
            </Typography>
            <TextField
              placeholder="Enter 1st Player"
              label="1st Player"
              value={players[0] || ""}
              onChange={handleFirstPlayerChange}
            />
            <TextField
              label="2nd Player"
              placeholder="Enter 2nd Player"
              value={players[1] || ""}
              onChange={handleSecondPlayerChange}
            />
            {validationMsg !== "" && (
              <Typography
                variant="caption"
                sx={{ fontFamily: "cursive" }}
                color={"red"}
              >
                {validationMsg}
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "#b51307",
                },
              }}
              onClick={handleCreatePlayer}
              startIcon={<GroupIcon />}
            >
              Create Player
            </Button>
          </Stack>
        )}

        <Footer />
      </Stack>
    </>
  );
}

export default RegisterUser;
