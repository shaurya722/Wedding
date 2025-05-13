import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ActionButtons = ({ onSkip, onNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 3, sm: 5 },
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" }
      }}
    >
      <Button
        onClick={onSkip}
        sx={{
          fontSize: "0.875rem",
          lineHeight: "2rem",
          color: "#a3a3a3", 
          fontWeight: 400,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#737373" 
          }
        }}
      >
        I don't know yet
      </Button>
      <Button
        onClick={onNext}
        sx={{
          px: 7,
          py: 1.5,
          width: { xs: "100%", sm: "240px" },
          fontSize: "1rem",
          fontWeight: 700,
          color: "white",
          borderRadius: "0.375rem",
          cursor: "pointer",
          bgcolor: "#64748b", // slate-500
          textTransform: "none",
          height: "48px",
          "&:hover": {
            bgcolor: "#475569" // slate-600
          }
        }}
      >
        Next Question
      </Button>
    </Box>
  );
};

export default ActionButtons;
