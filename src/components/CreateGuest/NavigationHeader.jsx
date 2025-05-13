import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(0, 20),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2.5),
  },
  height: 60,
  borderBottom: "1px solid #E0E0E0",
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: "normal",
  "&.active": {
    fontWeight: "bold",
  },
}));

export const NavigationHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <StyledToolbar>
        <Typography variant="h1" sx={{ color: "text.secondary" }}>
          Perfect Wedding Planner
        </Typography>

        {!isMobile && (
          <Box sx={{ ml: 5, display: "flex", gap: 5 }}>
            <NavButton className="active">Home</NavButton>
            <NavButton>Checklist</NavButton>
            <NavButton>Guests</NavButton>
            <NavButton>Budget</NavButton>
            <NavButton>Supplier</NavButton>
          </Box>
        )}

        <Box sx={{ ml: "auto" }}>
          <Avatar src="URL_XXX" alt="Profile" sx={{ width: 40, height: 40 }} />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
