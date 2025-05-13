import React from "react";
import { Box, Typography } from "@mui/material";

const RadioOption = ({ year, isSelected, onSelect }) => {
  return (
    <Box
      component="button"
      onClick={onSelect}
      sx={{
        display: "flex",
        gap: 2.5,
        alignItems: "center",
        px: 4,
        py: 2,
        width: "100%",
        height: "60px",
        borderRadius: "0.75rem",
        border: "1px solid",
        borderColor: isSelected ? "#7DA89B" : "#e5e7eb", // gray-400 : gray-200
        bgcolor: isSelected ? "#f3f4f6" : "#ffffff", // gray-100 : white
        transition: "all 0.2s ease",
        cursor: "pointer",
        textAlign: "left",
        "&:hover": {
          borderColor: isSelected ? "#9ca3af" : "#d1d5db", // gray-400 : gray-300
        },
        "&:focus": {
          outline: "none",
          boxShadow: "0 0 0 2px rgba(156, 163, 175, 0.5)" // gray-400 with opacity
        }
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "#171717" // neutral-900
        }}
      >
        {year}
      </Typography>
      <Box
        sx={{
          ml: "auto",
          borderRadius: "50%",
          border: "1px solid",
          borderColor: isSelected ? "#9ca3af" : "#e5e7eb", // gray-400 : gray-200
          height: "23px",
          width: "23px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: isSelected ? "#ffffff" : "transparent",
          padding: 0
        }}
      >
        {isSelected && (
          <Box
            sx={{
              bgcolor: "#7DA89B",
              borderRadius: "50%",
              height: "16.8px",
              width: "16.8px"
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default RadioOption;
