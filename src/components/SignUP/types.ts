import { TextFieldProps } from "@mui/material";

export interface FormInputProps extends Omit<TextFieldProps, "variant"> {
  showPasswordToggle?: boolean;
}

export interface InfoTooltipProps {
  text: string;
}
