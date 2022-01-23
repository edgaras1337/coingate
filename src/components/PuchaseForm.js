import React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import PayField from "./TextInputComponent";
import BuyField from "./TextInputComponent";
import CardDropdown from "../components/CardInputComponent";

// const FORM_VALIDATION = Yup.object().shape({
//   pay: Yup.object().shape({
//     amount: Yup.number()
//       .integer("Enter a valid amount")
//       .min(1)
//       .required("Required"),
//     currency: Yup.string().required("Required"),
//   }),
//   buy: Yup.object().shape({
//     amount: Yup.number()
//       .integer("Enter a valid amount")
//       .min(1)
//       .required("Required"),
//     currency: Yup.string().required("Required"),
//   }),
// });

const PurchaseForm = ({ theme, data }) => {
  const navigate = useNavigate();
  const defaultPayCurrency =
    data &&
    data.trader &&
    Object.keys(data.trader.buy[Object.keys(data.trader.buy)[0]]).find(
      (currency) => currency === "EUR"
    );
  const defaultBuyCurrency =
    data &&
    data.trader &&
    Object.keys(data.trader.buy).find((currency) => currency === "BTC");

  const FORM_INITIAL_STATE = {
    pay: {
      amount: "",
      currency: defaultPayCurrency,
    },
    buy: {
      amount: "",
      currency: defaultBuyCurrency,
    },
    card: "mastercard",
  };

  // STYLES
  const formContainer = {
    margin: 0,
    height: "528px",
    width: "465px",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "20%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "400px",
      height: "480px",
      marginLeft: "auto",
      marginRight: "3%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "500px",
      height: "auto",
      margin: "45px auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    position: "relative",
  };

  const formPaper = {
    position: "absolute",
    [theme.breakpoints.down("lg")]: {
      margin: "0",
      paddingTop: "10%",
      height: "auto",
      position: "static",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      paddingTop: "8%",
    },

    width: "100%",
    height: "inherit",
    left: 0,
    top: 0,
    borderRadius: "20px",
    boxSizing: "border-box",
    padding: "18% 8% 8% 8%",
    border: `1px solid ${theme.palette.outlineSecondaryGrey}`,

    "&::before": {
      content: `""`,
      [theme.breakpoints.up("lg")]: {
        position: "absolute",
        width: "100%",
        height: "inherit",
        left: -55,
        top: -50,
        zIndex: -1,
        background: theme.palette.secondaryBlue,
        border: `1px solid ${theme.palette.outlineSecondaryGrey}`,
        transform: "rotate(-6deg)",
        borderRadius: "20px",
      },
    },
  };

  const buyButton = {
    width: "calc(100% - 16%)",
    height: "48px",
    bottom: 0,
    color: theme.palette.white,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "30px",
    "&:disabled": {
      background: theme.palette.primaryGrey,
    },
    background: theme.palette.primaryGreen,
    "&:hover": {
      background: theme.palette.primaryGreen,
    },
    border: "none",
    boxSizing: "border-box",
    boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
    borderRadius: "5px 50px 50px 20px",
    textTransform: "capitalize",
  };

  return (
    <Formik
      initialValues={{ ...FORM_INITIAL_STATE }}
      // validationSchema={{ ...FORM_VALIDATION }}
      onSubmit={(values) => {
        navigate("/home");
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Box sx={formContainer}>
            <Paper sx={formPaper}>
              <PayField
                data={data}
                theme={theme}
                defaultCurrency={defaultPayCurrency}
                name="pay"
                label="Pay"
              />
              <BuyField
                data={data}
                theme={theme}
                defaultCurrency={defaultBuyCurrency}
                name="buy"
                label="Buy"
              />
              <Typography sx={{ margin: "8% 0 6% 0" }}>
                Payment Method
              </Typography>
              <CardDropdown theme={theme} name="card" />
              <Button
                sx={buyButton}
                disabled={
                  values.pay.amount > 0 && values.buy.amount > 0 ? false : true
                }
                type="submit"
              >
                Buy BTC
              </Button>
            </Paper>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PurchaseForm;
