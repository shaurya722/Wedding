"use client";
import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const FormInput = ({
  showPasswordToggle,
  type: initialType,
  InputProps,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? "text" : initialType;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const endAdornment = showPasswordToggle ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  ) : undefined;

  return (
    <TextField
      {...props}
      type={type}
      fullWidth
      variant="outlined"
      InputProps={{
        ...InputProps,
        endAdornment: endAdornment || InputProps?.endAdornment,
      }}
    />
  );
};
