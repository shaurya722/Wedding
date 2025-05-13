"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneInput from "./PhoneInput";

function VerificationForm() {
  const handleSendCode = () => {
    // Handle send code functionality here
    console.log("Sending verification code");
  };

  return (
    <Box
      sx={{
        flex: 1,
        p: { xs: 2.5, sm: 5 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.875rem", md: "2.25rem" },
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#171717", // neutral-900
        }}
      >
        Verify Your Phone Number
      </Typography>
      <Typography
        sx={{
          mt: 3,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "#171717", // neutral-900
        }}
      >
        We'll send you a code. It helps keep your account secure
      </Typography>

      <PhoneInput />

      <Box sx={{ mt: 3, fontSize: "0.875rem" }}>
        <Typography
          component="span"
          sx={{
            color: "#1c1917", // stone-900
          }}
        >
          Already have an account?
        </Typography>
        <Button
          sx={{
            fontWeight: 700,
            color: "#9ca3af", // gray-400
            textTransform: "none",
            minWidth: "auto",
            p: 0,
            ml: 0.5,
          }}
        >
          Login
        </Button>
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleSendCode}
        sx={{
          mt: 22, // equivalent to mt-44 in Tailwind
          height: "48px",
          fontSize: "1.125rem",
          fontWeight: 600,
          bgcolor: "#9ca3af", // gray-400
          borderRadius: "16px",
          color: "#f4f4f5", // zinc-100
          textTransform: "none",
          "&:hover": {
            bgcolor: "#6b7280", // slightly darker gray
          },
        }}
      >
        Send Code
      </Button>
    </Box>
  );
}

export default VerificationForm;
