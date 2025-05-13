
 
import { ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
 
const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
 
const SettingsMenuItem = ({ icon, text, isLast, textColor = "text.secondary" }) => {
  return (
    <>
      <StyledListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            '& .MuiListItemText-primary': {
              color: textColor,
              fontSize: '1rem',
            }
          }}
        />
      </StyledListItem>
      {!isLast && <Divider />}
    </>
  );
};
 
export default SettingsMenuItem;