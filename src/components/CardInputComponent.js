import React from "react";
import { Select, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { useField } from "formik";

const CardInputComponent = ({ theme, name }) => {
  const [field, meta] = useField(name);

  // STYLES
  const dropdownStyle = {
    marginTop: "5%",
    marginBottom: "30%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "100px",
    },
    height: "48px",
    width: "100%",

    fontSize: "18px",
    borderRadius: "20px",
    lineHeight: "48px",
  };
  const iconStyle = {
    maxWidth: "30px",
    marginRight: "10px",
  };

  return (
    <Select
      {...field}
      autoFocus={false}
      sx={dropdownStyle}
      inputProps={{
        sx: {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <MenuItem value={"mastercard"}>
        <ListItemIcon>
          <img src="./mastercard-icon.svg" alt="mastercard" style={iconStyle} />
          <ListItemText>Mastercard Bank Transfer</ListItemText>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={"visa"}>
        <ListItemIcon>
          <img src="./visa-icon.svg" alt="mastercard" style={iconStyle} />
          <ListItemText>Visa Bank Transfer</ListItemText>
        </ListItemIcon>
      </MenuItem>
      <MenuItem value={"sepa"}>
        <ListItemIcon>
          <img src="./sepa-icon.svg" alt="mastercard" style={iconStyle} />
          <ListItemText>Sepa Bank Transfer</ListItemText>
        </ListItemIcon>
      </MenuItem>
    </Select>
  );
};

export default CardInputComponent;
