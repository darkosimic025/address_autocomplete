import { css } from "styled-components";

export const color = (colorName: string) => css`
  ${({ theme }) => theme.colors[colorName]}
`;

export const fontSize = (sizeName: string) => css`
  ${({ theme }) => theme.fontSize[sizeName]}
`;

export const spacing = (spacingName: string) => css`
  ${({ theme }) => theme.spacing[spacingName]}
`;
