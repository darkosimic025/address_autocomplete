import React from "react";
import { SpinnerSize, SpinnerColor } from "./Spinner.types";
import { StyledSpinner, SpinnerDot } from "./Spinner.styled";

interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "m",
  color = "primary",
  label = "Loading...",
}) => {
  return (
    <StyledSpinner
      size={size}
      color={color}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </StyledSpinner>
  );
};

export default Spinner;
