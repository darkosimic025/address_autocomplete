import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";
import { fontSize, color, spacing } from "../../../theme/themeHelpers";

const variantStyles = {
  primary: css`
    background-color: ${color("primary")};
    border-color: ${color("primary")};
  `,
  secondary: css`
    background-color: ${color("secondary")};
    border-color: ${color("secondary")};
  `,
  danger: css`
    background-color: ${color("danger")};
    border-color: ${color("danger")};
  `,
  success: css`
    background-color: ${color("success")};
    border-color: ${color("success")};
  `,
  warning: css`
    background-color: ${color("warning")};
    border-color: ${color("warning")};
  `,
};

const sizeStyles = {
  s: css`
    padding: ${spacing("xs")} ${spacing("sm")};
    font-size: ${fontSize("s")};
    line-height: 1.25;
    border-radius: ${({ theme }) => theme.button.sizes.s.borderRadius};
  `,
  m: css`
    padding: ${spacing("sm")} ${spacing("md")};
    font-size: ${fontSize("medium")};
    font-weight: 700;
    line-height: 1.5;
    border-radius: ${({ theme }) => theme.button.sizes.m.borderRadius};
  `,
  l: css`
    padding: ${spacing("md")} ${spacing("lg")};
    font-size: ${fontSize("large")};
    line-height: 1.75;
    border-radius: ${({ theme }) => theme.button.sizes.l.borderRadius};
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  color: rgb(51, 51, 51);
  width: 100%;

  cursor: pointer;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 1s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${({ variant }) => variant && variantStyles[variant]}
  ${({ size }) => size && sizeStyles[size]}
     
  &:hover {
    filter: brightness(90%);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;
