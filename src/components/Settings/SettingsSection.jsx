 
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
 
const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));
 
const SettingsSection = ({ title, children }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          mb: 1,
          color: 'neutral.900'
        }}
      >
        {title}
      </Typography>
      <StyledPaper elevation={0}>
        {children}
      </StyledPaper>
    </Box>
  );
};
 
export default SettingsSection;