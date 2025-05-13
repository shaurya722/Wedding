import React from "react";
import { IconButtonProps } from "./types";

export const IconButton = ({
  icon,
  onClick,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};
