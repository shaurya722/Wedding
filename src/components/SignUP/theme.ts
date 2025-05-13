import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7DA89B",
    },
    grey: {
      100: "#F7F7F7",
      200: "#E4E4E4",
      300: "#8A8A8E",
      400: "#4B4B4B",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "0.875rem",
      fontWeight: 700,
      color: "#1C1C1E",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#1C1C1E",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#1C1C1E",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#1C1C1E",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.75rem",
            height: "50px",
            "& fieldset": {
              borderColor: "#E4E4E4",
            },
            "&:hover fieldset": {
              borderColor: "#7DA89B",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          textTransform: "none",
          fontSize: "1.125rem",
          fontWeight: 600,
          padding: "0.75rem",
        },
      },
    },
  },
});
