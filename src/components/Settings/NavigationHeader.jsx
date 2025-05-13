 
 
import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
 
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
 
const NavigationHeader = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ px: { xs: 2, md: 5, lg: 10 }, height: 60 }}>
        <Typography
          variant="h1"
          sx={{
            color: 'grey.400',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          Perfect Wedding Planner
        </Typography>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: 5,
            ml: 5
          }}
        >
          <Button sx={{ color: 'neutral.900', fontWeight: 600 }}>Home</Button>
          <Button sx={{ color: 'neutral.900' }}>Checklist</Button>
          <Button sx={{ color: 'neutral.900' }}>Guests</Button>
          <Button sx={{ color: 'neutral.900' }}>Budget</Button>
          <Button sx={{ color: 'neutral.900' }}>Supplier</Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          src="https://placehold.co/40x40/7da89b/7da89b"
          sx={{ width: 40, height: 40 }}
        />
      </Toolbar>
    </StyledAppBar>
  );
};
 
export default NavigationHeader;