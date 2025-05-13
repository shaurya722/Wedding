"use client";
import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import FooterHero from "./FooterHero";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <Box component="footer" sx={{ display: "flex", flexDirection: "column", bgcolor: "background.paper" }}>
      <FooterHero />
      <FooterInfo />
      <Divider sx={{ my: 5, width: "100%", mx: "auto" }} />
      <Typography
        variant="body1"
        sx={{
          pb: 5,
          textAlign: "center",
          color: "text.primary",
          lineHeight: 2
        }}
      >
        © 2024 Perfect Wedding Planner
      </Typography>
    </Box>
  );
};

export default Footer;
