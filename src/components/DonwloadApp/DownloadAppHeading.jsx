import React from "react";
import { Typography } from "@mui/material";

const DownloadAppHeading = ({ title }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.25rem", md: "3rem" },
        fontWeight: 700,
        lineHeight: { xs: "58px", md: "62px" },
        color: "text.primary",
      }}
    >
      {title}
    </Typography>
  );
};

export default DownloadAppHeading;
