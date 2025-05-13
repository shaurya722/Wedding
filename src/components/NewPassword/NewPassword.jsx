"use client";
import * as React from "react";
import { Box, Container, Paper, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PasswordForm from "./PasswordForm";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#7DA89B",
    },
    secondary: {
      main: "#FCB6CA",
    },
    grey: {
      400: "#bdbdbd",
    },
    background: {
      default: "#F8F7F4", // stone-50 equivalent
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
  },
});

const PasswordReset = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          bgcolor: "background.default",
          minHeight: "100vh"
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              width: "100%",
              borderRadius: 2,
              border: "1px solid #E0E0E0",
              overflow: "hidden",
              bgcolor: "white",
              flexDirection: { xs: "column", md: "row" }
            }}
          >
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36630b0bf78a9e59c2a001134c02010a8a75232d"
              alt="Password reset illustration"
              sx={{
                width: { xs: "100%", md: "376px" },
                height: { xs: "300px", md: "739px" },
                objectFit: "cover",
                borderRadius: {
                  xs: "10px 10px 0 0",
                  md: "10px 0 0 10px"
                },
                border: "1px solid #E4E4E4",
              }}
            />
            <PasswordForm />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PasswordReset;
