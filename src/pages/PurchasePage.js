import React, { useState, useEffect } from "react";
import { Paper, Box, Grid } from "@mui/material";

import { styled } from "@mui/system";
import axios from "axios";
import Paragraph from "../components/Paragraph";
import PurchaseForm from "../components/PuchaseForm";

const MainPage = ({ theme }) => {
  const getTraderRatesUrl = "http://api.coingate.com/v2/rates";
  const [data, setData] = useState({});
  const [defaultPay, setDefaultPay] = useState("");
  const [defaultBuy, setDefaultBuy] = useState("");
  const [payData, setPayData] = useState("");

  useEffect(() => {
    const getRates = () => {
      axios
        .get(getTraderRatesUrl)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setDefaultPay(
            Object.keys(
              res.data.trader.buy[Object.keys(res.data.trader.buy)[0]]
            ).find((currency) => currency === "EUR")
          );
          setDefaultBuy(
            Object.keys(res.data.trader.buy).find(
              (currency) => currency === "BTC"
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRates();
  }, []);

  const BackgroundPaper = styled(Paper, { name: "BackgroundPaper" })({
    width: "100%",
    position: "absolute",
    height: "1500px",
    bottom: "0",
    left: "10%",
    [theme.breakpoints.down("lg")]: {
      width: "200%",
      left: "-20%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200%",
      width: "1500px",
      left: "-200px",
    },
    zIndex: "-10",
    background: theme.palette.primaryBlue,
    transformOrigin: "bottom left",
    transform: "rotate(-2.5deg)",
    borderRadius: "50px",
    boxShadow: "none",
  });

  const ContainerWrapper = styled(Box, { name: "ContainerWrapper" })({
    overflowY: "visible",
  });
  const MainContainer = styled(Box, { name: "MainContainer" })({
    position: "relative",
    display: "flex",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xl")]: {
      justifyContent: "flex-end",
    },
  });
  const GridContainer = styled(Box, { name: "GridContainer" })({
    marginTop: "150px",
    [theme.breakpoints.down("xl")]: {
      width: "85%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      marginTop: "50px",
    },

    maxWidth: "2100px",
  });

  return (
    <ContainerWrapper>
      <MainContainer>
        <BackgroundPaper />
        <GridContainer>
          <Grid container>
            <Paragraph theme={theme} />
            <Grid
              item
              justifyContent="flex-start"
              sx={{ padding: "0 0px" }}
              xs={12}
              lg={6}
              xl={4}
              order={{ xs: 1, lg: 3 }}
            >
              <PurchaseForm theme={theme} data={data}></PurchaseForm>
            </Grid>
          </Grid>
        </GridContainer>
      </MainContainer>
      <Box
        sx={{
          width: "100%",
          height: "500px",
        }}
      ></Box>
    </ContainerWrapper>
  );
};

export default MainPage;
