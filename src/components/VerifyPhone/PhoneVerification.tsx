"use client";
import * as React from "react";
import { Box, Paper } from "@mui/material";
import Header from "./Header";
import VerificationForm from "./VerificationForm";

function PhoneVerification() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#faf9f7", 
      }}
    >
      {/* <Header /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 2.5,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "1008px",
            borderRadius: "12px",
            border: "1px solid #d4d4d4", 
            overflow: "hidden",
          }}
          elevation={0}
        >
          <Box
            component="figure"
            sx={{
              width: "376px",
              display: { xs: "none", md: "block" },
              m: 0,
            }}
          >
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/240e2eea01304305f41d1ebf4e90e8f483febaff"
              alt="Wedding couple"
              sx={{
                width: "100%",
                height: "673px",
                objectFit: "cover",
                borderRight: "1px solid #E4E4E4",
                borderRadius: "10px 0 0 10px",
              }}
            />
          </Box>
          <VerificationForm />
        </Paper>
      </Box>
    </Box>
  );
}

export default PhoneVerification;
