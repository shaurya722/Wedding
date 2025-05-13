import { createTheme } from '@mui/material/styles';
 
export const theme = createTheme({
  palette: {
    primary: {
      main: '#7DA89B',
    },
    neutral: {
      900: '#171717',
      500: '#737373',
    },
    grey: {
      400: '#9CA3AF',
      500: '#6B7280',
    },
    zinc: {
      500: '#71717A',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});