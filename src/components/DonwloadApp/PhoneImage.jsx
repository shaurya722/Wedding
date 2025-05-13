import React from "react";
import { Box } from "@mui/material";

const PhoneImage = ({ src, alt }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        objectFit: "contain",
        width: "100%",
        aspectRatio: "0.79/1",
        flexGrow: 1,
        mt: { xs: 5, md: 0 }
      }}
    />
  );
};

export default PhoneImage;
