import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledFormControl = styled(FormControl)({
  "& .MuiOutlinedInput-root": {
    height: "50px",
    borderRadius: "8px",
  },
});


export const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
    <Typography variant="body1">{label}</Typography>
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      variant="outlined"
    />
  </Box>
);



export const FormSelect = ({
  label,
  value,
  onChange,
}) => (
  <StyledFormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem value={value}>{value}</MenuItem>
    </Select>
  </StyledFormControl>
);
