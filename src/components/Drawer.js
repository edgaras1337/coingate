import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

const Drawer = ({ openDrawer, setOpenDrawer }) => {
  const StyledDrawer = styled(MuiDrawer, { name: "StyledDrawer" })({
    "& .MuiBackdrop-root": {
      // display: "none",
    },
    "& .MuiDrawer-paper": {
      zIndex: "20",
      position: "absolute",
      width: "100%",
      top: "70px",
    },
  });

  return (
    <StyledDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(!openDrawer)}
      BackdropProps={{ invisible: true }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};

export default Drawer;
