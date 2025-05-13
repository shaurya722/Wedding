 
"use client";
 
import { Box, Container, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import NavigationHeader from './NavigationHeader';
import SettingsSidebar from './SettingsSidebar';
import PrivacyPolicyContent from './PrivacyPolicyContent';
 
const SettingsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh' }}>
        <NavigationHeader />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              py: 8,
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <SettingsSidebar />
            <PrivacyPolicyContent />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
 
export default SettingsPage;