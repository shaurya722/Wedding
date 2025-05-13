"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#7DA89B",
    },
    secondary: {
      main: "#FD2854",
    },
    text: {
      primary: "#171717", // neutral-900
      secondary: "#9CA3AF", // gray-400
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h2: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1.5rem',
        },
      },
    },
  },
});

const WeddingPlannerFooter = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Footer />
    </ThemeProvider>
  );
};

export default WeddingPlannerFooter;
