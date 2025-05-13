import React from "react";
import { Typography } from "@mui/material";

const DownloadAppContent = ({ description }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        mt: 1.5,
        fontSize: "1.25rem",
        lineHeight: "36px",
        color: "text.primary",
      }}
    >
      {description}
    </Typography>
  );
};

export default DownloadAppContent;
