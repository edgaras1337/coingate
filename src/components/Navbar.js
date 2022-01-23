import React, { useState } from "react";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  useMediaQuery,
  Box,
} from "@mui/material";
import Drawer from "./Drawer";

const LINKS = ["Products", "Resources", "Buy Instantly"];

const Navbar = ({ theme }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const MenuLink = styled(Link, { name: "AppbarLink" })({
    marginRight: "65px ",
    cursor: "pointer",
    fontSize: "18px",
    color: theme.palette.secondaryGrey,
    textDecoration: "none",
  });

  const StyledAppBar = styled(AppBar, { name: "StyledAppBar" })({
    position: "absolute",
    height: "101px",
    [theme.breakpoints.down("lg")]: {
      height: "70px",
    },
    background: theme.palette.white,
    boxShadow: "0 5px 11px rgba(29, 0, 62, 0.07)",
    borderRadius: 0,
    boxSizing: "border-box",
    zIndex: "1201",
    padding: "0 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5px",
    },
  });
  const StyledToolbar = styled(Toolbar, { name: "StyledToolbar" })({
    height: "100%",
  });

  const LoginButton = styled(Typography, { name: "LoginButton" })({
    color: theme.palette.secondaryGrey,
    fontSize: 17,
    marginLeft: "auto",
    cursor: "pointer",
  });
  const SignUpButton = styled(Button, { name: "SignUpButton" })({
    marginLeft: 50,
    width: 145,
    height: 50,
    padding: 15,
    color: theme.palette.white,
    background: theme.palette.primaryGreen,
    borderRadius: "4px 50px 50px 20px",
    ":hover": {
      background: theme.palette.primaryGreen,
    },
  });

  const MenuIcon = styled(MenuOutlinedIcon, { name: "MenuIcon" })({
    color: theme.palette.listGrey,
    cursor: "pointer",
    marginLeft: "auto",
    fontSize: "30px",
  });

  const ImageBox = styled(Box, { name: "ImageBox" })({
    [theme.breakpoints.up("sm")]: {
      marginRight: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
  });

  return (
    <>
      {/* box element hides behind absolute appbar to push all the elements down */}
      {/* it was added, because padding is added to the statically positioned appbar 
      when a dropdown is opened */}
      <Box
        sx={{
          height: "101px",
          [theme.breakpoints.down("lg")]: {
            height: "70px",
          },
        }}
      />
      <StyledAppBar>
        <StyledToolbar>
          <ImageBox>
            <img
              src="/logo.png"
              alt="coingate-logo"
              style={{ cursor: "pointer", width: "157px" }}
            />
          </ImageBox>

          {lgDown ? (
            <>
              <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
              {/* <Drawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              ></Drawer> */}
            </>
          ) : (
            <>
              {LINKS.map((link, index) => (
                <MenuLink key={index}>{link}</MenuLink>
              ))}
              <LoginButton>Log in</LoginButton>
              <SignUpButton endIcon={<ChevronRightIcon />}>
                Sign Up
              </SignUpButton>
            </>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default Navbar;
