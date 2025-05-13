import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

// Returns sx styles for built-in and custom variants
const getCustomButtonStyle = (variant) => {
  switch (variant) {
    case 'danger':
      return {
        backgroundColor: '#e53935',
        color: '#fff',
        '&:hover': { backgroundColor: '#b71c1c' },
      };
    case 'success':
      return {
        backgroundColor: '#43a047',
        color: '#fff',
        '&:hover': { backgroundColor: '#1b5e20' },
      };
    case 'info':
      return {
        backgroundColor: '#1e88e5',
        color: '#fff',
        '&:hover': { backgroundColor: '#1565c0' },
      };
    case 'gradient':
      return {
        background: 'linear-gradient(90deg, #1976d2 0%, #43a047 100%)',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
        '&:hover': {
          background: 'linear-gradient(90deg, #1565c0 0%, #2e7d32 100%)',
        },
      };
    // Default MUI variants: contained, outlined, text
    case 'outlined':
      return {
        border: '2px solid #1976d2',
        color: '#1976d2',
        backgroundColor: 'transparent',
        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' },
      };
    case 'text':
      return {
        color: '#1976d2',
        backgroundColor: 'transparent',
        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' },
      };
    case 'contained':
    default:
      return {
        backgroundColor: '#1976d2',
        color: '#fff',
        '&:hover': { backgroundColor: '#1565c0' },
      };
  }
};

/**
 * CustomButton - supports variant: contained, outlined, text, danger, success, info, gradient
 */
const CustomButton = ({
  children,
  variant = 'contained',
  size = 'medium',
  loading = false,
  startIcon,
  endIcon,
  className = '',
  sx = {},
  style = {},
  disabled,
  ...rest
}) => {
  const customSx = getCustomButtonStyle(variant);
  const mergedSx = { ...customSx, ...sx };

  return (
    <MuiButton
      variant={[ 'danger', 'success', 'info', 'gradient' ].includes(variant) ? 'contained' : variant}
      size={size}
      className={`custom-button ${className}`}
      sx={mergedSx}
      style={style}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {children}
          <CircularProgress
            size={20}
            style={{ marginLeft: 12, color: mergedSx.color || (variant === 'contained' ? 'white' : '#1976d2') }}
          />
        </span>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default CustomButton;
