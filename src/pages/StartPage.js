import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StartPage = ({ theme }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "200px",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "48px", fontWeight: "800" }}>
        Start earning money right now!
      </Typography>
      <Link
        to="/"
        style={{
          color: theme.palette.primaryGreen,
          fontSize: "24px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        {"> Buy Crypto"}
      </Link>
    </Box>
  );
};

export default StartPage;
