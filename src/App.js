import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PurchasePage from "./pages/PurchasePage";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import NotFound from "./pages/NotFound";
import { createTheme } from "@mui/system";
import { Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      white: "#FFF",
      primaryBlue: "#5022ED",
      secondaryBlue: "#E9F6FF",
      primaryGreen: "#16DFB5",
      primaryGrey: "#B5B5B5",
      secondaryGrey: "#7F88A0",
      outlineGrey: "#D9D9D9",
      listGrey: "#C7C7C7",
      outlineSecondaryGrey: "#E8E8E8",
      lightGrey: "#FBFBFB",
    },
  });

  return (
    <div className="App">
      <Navbar theme={theme} />
      <Routes>
        <Route exact path="/" element={<PurchasePage theme={theme} />} />
        <Route exact path="/home" element={<HomePage theme={theme} />} />
        <Route exact path="/start" element={<StartPage theme={theme} />} />
        <Route path="*" element={<NotFound theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
