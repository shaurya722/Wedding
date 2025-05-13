import React from "react";
import { Box, Typography } from "@mui/material";

const QuestionHeader = ({ title, description }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start", width: "100%" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1rem", md: "2rem", lg: "2rem" },
          fontWeight: "bold",
          color: "neutral.900"
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1.125rem", md: "1.25rem", lg: "1.5rem" },
          lineHeight: { xs: "1.75rem", md: "2rem", lg: "2.25rem" },
          color: "neutral.900"
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default QuestionHeader;
