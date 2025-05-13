import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FooterHero = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        p: 4,
        bgcolor: "rgb(125, 168, 155, 0.1)"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          lineHeight: { xs: 1.3, md: 1.4 },
          maxWidth: "887px",
          color: "text.primary",
          fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" }
        }}
      >
        Planning your wedding is more fun with your Friends
      </Typography>
      <Button
        variant="contained"
        sx={{
          px: 5,
          py: 2,
          fontSize: "1.125rem",
          fontWeight: 600,
          lineHeight: 1.25,
          textAlign: "center",
          color: "white",
          bgcolor: "rgb(125, 168, 155, 1)",
          borderRadius: "1.5rem",
          "&:hover": {
            bgcolor: "grey.500"
          }
        }}
        aria-label="Invite friends"
      >
        Invite Now
      </Button>
    </Box>
  );
};

export default FooterHero;
