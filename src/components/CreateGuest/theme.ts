import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5778A8",
      light: "#indigo.300",
    },
    text: {
      primary: "#181818",
      secondary: "#8A8A8E",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#666666",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#1F1F1F",
    },
    body1: {
      fontSize: "1rem",
      color: "#1F1F1F",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#8A8A8E",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: "50px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          border: "1px solid #E0E0E0",
        },
      },
    },
  },
});
