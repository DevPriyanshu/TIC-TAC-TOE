import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Game from "./game";
import GroupIcon from "@mui/icons-material/Group";
import Footer from "./footer";
import { Computer, PlayArrow } from "@mui/icons-material";

function RegisterUser() {
  const [players, setPlayers] = useState([]);
  const [isPlayerCreated, setIsPlayerCreated] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const [singlePlayerMode, setSinglePlayerMode] = useState(false);
  const [isModeSlected, setIsModeSelected] = useState(false);

  const handleFirstPlayerChange = (event) => {
    const firstPlayer = event.target.value;
    setPlayers((prevPlayers) => [firstPlayer, prevPlayers[1]]);
  };

  const handleSecondPlayerChange = (event) => {
    const secondPlayer = event.target.value;
    setPlayers((prevPlayers) => [prevPlayers[0], secondPlayer]);
  };

  function handlePlayerChangeForSolo(event) {
    const playerName = event.target.value;
    const randomPlayer = "Computer";
    setPlayers([playerName, randomPlayer]);
  }

  const handlePlayBtn = () => {
    if (
      players.length === 2 &&
      (players.every((player) => player.trim() !== "") || singlePlayerMode)
    ) {
      setIsPlayerCreated(true);
    } else if (singlePlayerMode) {
      setValidationMsg("Player name must be filled.");
    } else {
      setValidationMsg("Player(s) names must be filled.");
    }
  };

  function handleDuelPlayer() {
    setIsModeSelected(true);
  }

  function handleSinglePlayer() {
    setIsModeSelected(true);
    setSinglePlayerMode(true);
  }
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
          <Game players={players} singlePlayerMode={singlePlayerMode} />
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

            {isModeSlected && (
              <>
                {singlePlayerMode ? (
                  <>
                    <TextField
                      label="Player Name"
                      placeholder="Enter Player"
                      value={players[0] || ""}
                      onChange={handlePlayerChangeForSolo}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "blue",
                        marginTop: 2,
                      }}
                      startIcon={<PlayArrow />}
                      onClick={handlePlayBtn}
                    >
                      Start the game
                    </Button>
                  </>
                ) : (
                  <>
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
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "blue",
                        marginTop: 2,
                      }}
                      startIcon={<PlayArrow />}
                      onClick={handlePlayBtn}
                    >
                      Start the game
                    </Button>
                  </>
                )}
              </>
            )}

            {validationMsg !== "" && (
              <Typography
                variant="caption"
                sx={{ fontFamily: "cursive" }}
                color={"red"}
              >
                {validationMsg}
              </Typography>
            )}

            {!isModeSlected && (
              <>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "red",
                    "&:hover": {
                      backgroundColor: "#b51307",
                    },
                  }}
                  onClick={handleDuelPlayer}
                  startIcon={<GroupIcon />}
                >
                  Play Duel with a friend
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "blue",
                    "&:hover": {
                      backgroundColor: "#007bff",
                    },
                    marginTop: 2,
                  }}
                  startIcon={<Computer />}
                  onClick={handleSinglePlayer}
                >
                  Challenge the computer
                </Button>
              </>
            )}
          </Stack>
        )}

        <Footer />
      </Stack>
    </>
  );
}

export default RegisterUser;
