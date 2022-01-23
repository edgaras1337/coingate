import React from "react";
import { Box, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { useNavigate, Link } from "react-router-dom";

const NotFound = ({ theme }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "48px", fontWeight: "800" }}>
        404 ERROR
      </Typography>
      <Typography sx={{ fontSize: "30px" }}>Page Not Found</Typography>
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

export default NotFound;
