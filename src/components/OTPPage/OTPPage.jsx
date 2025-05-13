"use client";
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  styled
} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

// Custom theme to match the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#7DA89B',
    },
    secondary: {
      main: '#E7EAEB',
    },
    text: {
      primary: '#181818',
      secondary: '#9CA3AF',
    },
    background: {
      default: '#FAFAF9',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.125rem',
          padding: '12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

// Custom styled components
const CodeInput = styled(TextField)(({ theme }) => ({
  width: 72,
  height: 60,
  '& .MuiOutlinedInput-root': {
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    fontSize: '1rem',
    textAlign: 'center',
    '& input': {
      textAlign: 'center',
      padding: 0,
      fontSize: '1.25rem',
    },
  },
}));

const FilledCodeInput = styled(TextField)(({ theme }) => ({
  width: 72,
  height: 60,
  '& .MuiOutlinedInput-root': {
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    border: '1px solid #9CA3AF',
    fontSize: '1rem',
    textAlign: 'center',
    '& input': {
      textAlign: 'center',
      padding: 0,
      fontSize: '1.25rem',
    },
  },
}));

// SVG Icons as React components
const HeartIcon = () => (
  <SvgIcon viewBox="0 0 16 16" sx={{ width: 16, height: 16 }}>
    <path d="M11 2C10.4178 2 9.84366 2.13554 9.32295 2.3959C8.80224 2.65625 8.3493 3.03426 8 3.5C7.52776 2.87035 6.86939 2.40525 6.11813 2.17057C5.36687 1.9359 4.56082 1.94355 3.81415 2.19244C3.06748 2.44133 2.41804 2.91884 1.95784 3.55734C1.49764 4.19583 1.25 4.96294 1.25 5.75C1.25 10.2437 7.49375 13.7875 7.75625 13.9375C7.83063 13.9793 7.91468 14.0009 8 14C8.08539 14.0015 8.1696 13.9799 8.24375 13.9375C9.39356 13.2653 10.472 12.4779 11.4625 11.5875C13.6437 9.625 14.75 7.6625 14.75 5.75C14.75 4.75544 14.3549 3.80161 13.6517 3.09835C12.9484 2.39509 11.9946 2 11 2Z"
    fill="#7DA89B" />
  </SvgIcon>
);

const TimerIcon = () => (
  <Box component="svg" width="45" height="19" viewBox="0 0 45 19" fill="none">
    <path d="M9.5 0C4.2655 0 0 4.2655 0 9.5C0 14.7345 4.2655 19 9.5 19C14.7345 19 19 14.7345 19 9.5C19 4.2655 14.7345 0 9.5 0ZM13.6325 12.8915C13.4995 13.1195 13.262 13.243 13.015 13.243C12.8915 13.243 12.768 13.2145 12.654 13.1385L9.709 11.381C8.9775 10.944 8.436 9.9845 8.436 9.139V5.244C8.436 4.8545 8.759 4.5315 9.1485 4.5315C9.538 4.5315 9.861 4.8545 9.861 5.244V9.139C9.861 9.481 10.146 9.9845 10.4405 10.1555L13.3855 11.913C13.7275 12.1125 13.8415 12.5495 13.6325 12.8915Z"
    fill="#E7EAEB" />
    <text fill="#181818" style={{ whiteSpace: 'pre' }} fontFamily="Nunito" fontSize="13" fontWeight="bold">
      <tspan x="23.0312" y="13.277">34s</tspan>
    </text>
  </Box>
);

function InputDesign() {
  // State for verification code inputs
  const [verificationCode, setVerificationCode] = useState(['5', '', '', '', '', '']);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input if a digit was entered
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 5,
          bgcolor: 'background.default',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Header */}
        
          {/* Main Content */}
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '1008px',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '12px',
              overflow: 'hidden',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            {/* Left Image */}
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e1846d53f45268a0fe4012fffcf158d5c24973"
              alt=""
              sx={{
                width: { xs: '100%', lg: '376px' },
                height: '739px',
                objectFit: 'cover',
                borderRadius: { xs: '10px 10px 0 0', md: '10px 0 0 10px' },
                border: '1px solid #E4E4E4'
              }}
            />

            {/* Right Content */}
            <Box
              sx={{
                flex: 1,
                p: { xs: 3, md: 5 }
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: 'text.primary'
                }}
              >
                We just sent an SMS
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary'
                  }}
                >
                  Enter the security code we sent to +49 7656789067
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    ml: 1.5,
                    fontWeight: 'bold',
                    color: 'text.secondary',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </Typography>
              </Box>

              {/* Verification Code Inputs */}
              <Grid
                container
                spacing={2}
                sx={{
                  mb: 3,
                  flexWrap: { xs: 'wrap', sm: 'nowrap' }
                }}
              >
                <Grid item>
                  <FilledCodeInput
                    id="code-input-0"
                    value={verificationCode[0]}
                    onChange={(e) => handleCodeChange(0, e.target.value)}
                    inputProps={{ maxLength: 1 }}
                    variant="outlined"
                  />
                </Grid>
                {[1, 2, 3, 4, 5].map((index) => (
                  <Grid item key={index}>
                    <CodeInput
                      id={`code-input-${index}`}
                      value={verificationCode[index]}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      inputProps={{ maxLength: 1 }}
                      variant="outlined"
                    />
                  </Grid>
                ))}
              </Grid>

              {/* Resend and Timer */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3
                }}
              >
                <Typography variant="body1">
                  <span style={{ color: theme.palette.text.primary }}>Didn't get the code?</span>{' '}
                  <span style={{ fontWeight: 'bold', color: theme.palette.text.secondary, cursor: 'pointer' }}>
                    Resend it
                  </span>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <TimerIcon />
                </Box>
              </Box>

              {/* Done Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 48,
                  bgcolor: '#9CA3AF',
                  color: '#F9FAFB',
                  '&:hover': {
                    bgcolor: '#6B7280',
                  },
                  borderRadius: '16px',
                  fontSize: '1.125rem',
                  fontWeight: 600
                }}
              >
                Done
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default InputDesign;
