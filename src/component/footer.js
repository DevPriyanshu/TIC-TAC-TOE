import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "white",
        padding: "20px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Typography variant="body1" color="white">
        © 2024 Explore Tic Tac Toe with Priyanshu yadav!
      </Typography>
    </Box>
  );
};

export default Footer;
