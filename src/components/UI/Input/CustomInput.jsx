import React from 'react';
import { Box, FormControl, TextField, InputAdornment } from '@mui/material';

// Custom styles for different variants
const getCustomInputStyle = (variant) => {
  switch (variant) {
    case 'danger':
      return {
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#e53935' },
          '&:hover fieldset': { borderColor: '#b71c1c' },
        },
        '& .MuiInputLabel-root': { color: '#e53935' },
      };
    case 'success':
      return {
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#43a047' },
          '&:hover fieldset': { borderColor: '#1b5e20' },
        },
        '& .MuiInputLabel-root': { color: '#43a047' },
      };
    case 'info':
      return {
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#1e88e5' },
          '&:hover fieldset': { borderColor: '#1565c0' },
        },
        '& .MuiInputLabel-root': { color: '#1e88e5' },
      };
    case 'gradient':
      return {
        '& .MuiOutlinedInput-root': {
          background: 'linear-gradient(90deg, #1976d2 0%, #43a047 100%)',
          color: '#fff',
          '& fieldset': { borderColor: 'transparent' },
        },
        '& .MuiInputLabel-root': { color: '#fff' },
      };
    default:
      return {};
  }
};

/**
 * CustomInput - supports variant: default, danger, success, info, gradient
 * Props:
 * - variant: input style variant
 * - startIcon: icon component to show at the start (left)
 * - endIcon: icon component to show at the end (right)
 * - className: extra class names
 * - sx: MUI system style overrides
 * - ...props: all other MUI TextField props
 */
const CustomInput = ({ variant = 'default', className = '', sx = {}, startIcon, endIcon, ...props }) => {
  const customSx = getCustomInputStyle(variant);
  const mergedSx = { ...customSx, ...sx };

  // Merge adornments with any user InputProps
  const inputProps = {
    ...(props.InputProps || {}),
    startAdornment: startIcon ? (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    ) : (props.InputProps && props.InputProps.startAdornment),
    endAdornment: endIcon ? (
      <InputAdornment position="end">{endIcon}</InputAdornment>
    ) : (props.InputProps && props.InputProps.endAdornment),
  };

  return (
    <FormControl sx={{ mb: 2 }} fullWidth className={`custom-input ${className}`}>
      <TextField
        {...props}
        fullWidth
        sx={mergedSx}
        InputProps={inputProps}
      />
    </FormControl>
  );
};

export default CustomInput;
