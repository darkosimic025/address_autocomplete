import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  id,
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  size = "m",
  ...props
}) => {
  return (
    <StyledButton
      id={id}
      onClick={onClick}
      variant={variant}
      aria-disabled={disabled ? true : undefined}
      type={type}
      size={size}
      aria-label={children as string}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
