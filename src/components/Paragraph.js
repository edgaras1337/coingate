import React from "react";
import { Grid, Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Paragraph = ({ theme }) => {
  const navigate = useNavigate();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const mainTextBox = {
    fontSize: "60px",
    top: "200px",
    fontSize: "60px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      margin: "auto",
      fontSize: "40px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "auto",
      fontSize: "40px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "auto",
      fontSize: "32px",
    },
    fontWeight: 700,
    color: theme.palette.white,
    maxWidth: "625px",
    margin: "0 0 50px 0",
  };

  const paragraphBox = {
    margin: 0,
    fontSize: "24px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      margin: "auto",
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "auto",
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
      fontSize: "14px",
      lineHeight: "30px",
    },
    fontWeight: 400,
    color: theme.palette.white,
    maxWidth: "625px",
    marginRight: 0,
    lineHeight: "40px",
  };

  const startNowLink = {
    background: "none",
    width: "105px",
    color: theme.palette.primaryGreen,
    textTransform: "capitalize",
    padding: 0,
    marginTop: "20px",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "100px",
    [theme.breakpoints.up("xl")]: {
      marginBottom: "200px",
    },
    [theme.breakpoints.down("xl")]: {
      marginBottom: "150px",
    },
  };

  return lgDown ? (
    <>
      <Grid item xs={12} order={{ xs: 1 }}>
        <Box sx={mainTextBox}>
          <span style={{ color: theme.palette.primaryGreen }}>
            Buy Bitcoin,{" "}
          </span>
          Ethereum, Litecoin and other crypto
          <span style={{ color: theme.palette.primaryGreen }}> online</span>
        </Box>
      </Grid>
      <Grid item xs={12} order={{ xs: 3 }}>
        <Box sx={paragraphBox}>
          Why bother going through complicated exchanges? Buy cryptocurrency
          with top payment methods like SEPA bank transfer, Credit and Debit
          Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
          Ethereum or any other popular crypto directly to your personal wallet
          without making any initial deposits. It's as easy as it gets!
          <Link sx={startNowLink} onClick={() => navigate("/start")}>
            <Typography sx={{ marginRight: "5px" }}>Start Now</Typography>
            <ChevronRightIcon />
          </Link>
        </Box>
      </Grid>
    </>
  ) : (
    <>
      <Grid item lg={6} xl={8}>
        <Grid>
          <Box sx={mainTextBox}>
            <span style={{ color: theme.palette.primaryGreen }}>
              Buy Bitcoin,{" "}
            </span>
            Ethereum, Litecoin and other crypto{" "}
            <span style={{ color: theme.palette.primaryGreen }}>online</span>
          </Box>
        </Grid>
        <Grid>
          <Box sx={paragraphBox}>
            Why bother going through complicated exchanges? Buy cryptocurrency
            with top payment methods like SEPA bank transfer, Credit and Debit
            Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
            Ethereum or any other popular crypto directly to your personal
            wallet without making any initial deposits. It's as easy as it gets!
          </Box>
          <Link sx={startNowLink} onClick={() => navigate("/start")}>
            <Typography sx={{ marginRight: "5px" }}>Start Now</Typography>
            <ChevronRightIcon />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Paragraph;
