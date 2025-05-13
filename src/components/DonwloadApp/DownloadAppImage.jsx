import React from "react";
import { Box } from "@mui/material";

const DownloadAppImage = ({ src, alt }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        mt: { xs: 5, md: 6 },
        objectFit: "contain",
        maxWidth: "100%",
        width: "340px",
        aspectRatio: "6.17/1"
      }}
    />
  );
};

export default DownloadAppImage;
