import React, { useState, useEffect } from "react";
import {
  InputAdornment,
  TextField,
  Typography,
  Select,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useField, useFormikContext } from "formik";

const TextInputComponent = ({ data, theme, name, label, defaultCurrency }) => {
  const [currencyField, currencyMeta] = useField(name + ".currency");
  const [amountField, amountMeta] = useField(name + ".amount");
  const [currencyChanged, setCurrencyChanged] = useState(false);

  const {
    values: { buy, pay },
    touched,
    setFieldValue,
  } = useFormikContext();

  useEffect(() => {
    if (!currencyChanged && name === "pay" && pay !== "" && touched.pay) {
      const rate = data && data.trader && data.trader.buy[buy.currency];
      let total =
        rate &&
        rate[pay.currency] &&
        parseFloat(pay.amount) / parseFloat(rate[pay.currency]);

      setFieldValue("buy.amount", total ? total : "");

      if (currencyChanged) {
        setCurrencyChanged(false);
      }
    }
  }, [pay, touched.pay, setFieldValue, name]);

  useEffect(() => {
    if (!currencyChanged && name === "buy" && buy !== "" && touched.buy) {
      const rate = data && data.trader && data.trader.buy[buy.currency];
      let total =
        rate &&
        rate[pay.currency] &&
        buy.amount &&
        parseFloat(buy.amount) * parseFloat(rate[pay.currency]);

      total = Math.round(total * 100) / 100;
      if (currencyChanged) {
        setCurrencyChanged(false);
      }

      setFieldValue("pay.amount", total ? total : "");
    }
  }, [buy, touched.buy, setFieldValue, name]);

  // STYLES
  const textFieldStyle = {
    marginTop: "5%",
    height: "48px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      boxSizing: "border-box",
      borderRadius: "20px",
      "& fieldset": {
        border: `1px solid ${theme.palette.outlineGrey}`,
      },
      "&.Mui-focused fieldset": {
        border: `1px solid ${theme.palette.primaryBlue}`,
      },

      "& .MuiInputAdornment-root": {
        // maxWidth: "60%",
        "& .MuiSelect-select": {
          padding: "0 50px 0 10%",
        },
        "& fieldset": {
          borderRadius: 0,
          border: "none",
          borderLeft: `1px solid ${theme.palette.outlineGrey}`,
        },
        "& .Mui-focused fieldset": {},
      },
    },
  };
  const inputPropsStyle = {
    padding: "0 5%",
    textAlign: "center",
    boxSizing: "border-box",
    height: "48px",
    fontSize: "18px",
  };
  const selectStyle = {
    width: "100%",
    height: "30px",
  };

  return (
    <TextField
      sx={textFieldStyle}
      name={name + ".amount"}
      {...amountField}
      onChange={(e) => {
        e.preventDefault();
        const { value } = e.target;
        const regex = /^(^\d*\.?\d*$)$/;
        if (regex.test(value.toString())) {
          setFieldValue(`${name}.amount`, value);
        }
      }}
      autoComplete="off"
      inputProps={{
        style: inputPropsStyle,
      }}
      InputProps={{
        startAdornment: (
          <Typography sx={{ fontSize: "15px", marginLeft: "3%" }}>
            {label}
          </Typography>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Select
              sx={selectStyle}
              IconComponent={KeyboardArrowDownIcon}
              onChange={(e) => {
                e.preventDefault();
                const { value } = e.target;
                setFieldValue(`${name}.currency`, value);
                setCurrencyChanged(true);
              }}
              {...currencyField}
              name={name + ".currency"}
            >
              {data &&
                data.trader &&
                Object.keys(
                  name === "pay"
                    ? data.trader.buy[Object.keys(data.trader.buy)[0]]
                    : name === "buy" && data.trader.buy
                ).map((currency, index) => (
                  <MenuItem value={currency} key={index}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img
                        src={`https://cryptoicons.org/api/icon/${currency.toLowerCase()}/25`}
                        alt="currency"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "./default-logo.svg";
                        }}
                        style={{
                          height: "25px",
                          marginRight: "10%",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        {currency}
                      </Typography>
                    </ListItemIcon>
                  </MenuItem>
                ))}
            </Select>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextInputComponent;
