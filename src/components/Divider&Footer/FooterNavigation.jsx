import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

const FooterNavigation = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        gap: { xs: 5, md: 12 },
        flexWrap: { xs: "wrap", md: "nowrap" }
      }}
    >
      <FooterLinkGroup
        title="Useful Links"
        links={["About Us", "Contact Us", "Subscription Plan"]}
      />
      <FooterLinkGroup
        title="Legal"
        links={["Privacy Policy", "Terms & Conditions"]}
      />
      <FooterLinkGroup
        title="Services"
        links={["Checklist", "Guestlist", "Budget", "Supplier"]}
      />
      <AppDownloadSection />
    </Box>
  );
};

const FooterLinkGroup = ({ title, links }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Typography
        variant="overline"
        sx={{
          fontSize: "0.75rem",
          letterSpacing: 1.5,
          lineHeight: 1,
          color: "text.secondary",
          textTransform: "uppercase"
        }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ display: "flex", flexDirection: "column", gap: 1.25, pl: 0, m: 0, listStyle: "none" }}>
        {links.map((link, index) => (
          <Box component="li" key={index}>
            <Link
              href="#"
              underline="hover"
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
                color: "text.primary",
                textDecoration: "none"
              }}
            >
              {link}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const AppDownloadSection = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Typography
        variant="overline"
        sx={{
          fontSize: "0.75rem",
          letterSpacing: 1.5,
          lineHeight: 1,
          color: "text.secondary",
          textTransform: "uppercase"
        }}
      >
        Get The App
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          lineHeight: 2,
          color: "text.primary"
        }}
      >
        Plan together: anytime, anywhere
      </Typography>
      <Box sx={{ display: "flex",flexDirection:"column", gap: 1.25 }}>
        <img src='src/assets/Clip path group.svg' width={132} height={44}/>
        <img src='src/assets/Group 2085662741.svg' width={132} height={44}/>

      </Box>
    </Box>
  );
};

export default FooterNavigation;
