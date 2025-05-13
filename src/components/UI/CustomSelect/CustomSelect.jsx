// components/CustomSelect.js
import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const CustomSelect = ({
  label = '',
  name = '',
  value,
  onChange,
  options = [],
  placeholder = '',
  fullWidth = true,
  size = 'small',
  variant = 'outlined',
  sx = {},
}) => {
  return (
    <FormControl fullWidth={fullWidth} size={size} variant={variant} sx={sx}>
      {label && <InputLabel id={`${name}-label`}>{label}</InputLabel>}
      <Select
        labelId={`${name}-label`}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        displayEmpty
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
