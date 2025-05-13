import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SocialIcon from "./SocialIcon";
import FooterNavigation from "./FooterNavigation";

const FooterInfo = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: { xs: 2.5, sm: 5, md: 14 },
        py: 5.5,
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 5, sm: 0 }
      }}
    >
      <CompanyInfo />
      <FooterNavigation />
    </Box>
  );
};

const CompanyInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, maxWidth: "238px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "text.primary"
          }}
        >
          Perfect Wedding Planner
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
          <Typography variant="caption" sx={{ color: "text.primary" }}>
            Made with
          </Typography>
          <HeartIcon />
          <Typography variant="caption" sx={{ color: "text.primary" }}>
            In Munich
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.75,
          color: "text.primary"
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </Typography>
      <Box sx={{ display: "flex", gap: 1.25 }}>
        <SocialIcon type="tiktok" />
        <SocialIcon type="instagram" />
      </Box>
    </Box>
  );
};

const HeartIcon = () => {
  return (
    <Box>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "16px", height: "16px" }}
      >
        <path
          d="M11 2C10.4178 2 9.84366 2.13554 9.32295 2.3959C8.80224 2.65625 8.3493 3.03426 8 3.5C7.52776 2.87035 6.86939 2.40525 6.11813 2.17057C5.36687 1.9359 4.56082 1.94355 3.81415 2.19244C3.06748 2.44133 2.41804 2.91884 1.95784 3.55734C1.49764 4.19583 1.25 4.96294 1.25 5.75C1.25 10.2437 7.49375 13.7875 7.75625 13.9375C7.83063 13.9793 7.91468 14.0009 8 14C8.08539 14.0015 8.1696 13.9799 8.24375 13.9375C9.39356 13.2653 10.472 12.4779 11.4625 11.5875C13.6437 9.625 14.75 7.6625 14.75 5.75C14.75 4.75544 14.3549 3.80161 13.6517 3.09835C12.9484 2.39509 11.9946 2 11 2Z"
          fill="#7DA89B"
        />
      </svg>
    </Box>
  );
};

export default FooterInfo;
