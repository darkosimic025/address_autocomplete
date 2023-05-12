import styled from "styled-components";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.svg<Omit<IconProps, "name">>`
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  fill: ${({ color, theme }) =>
    theme.colors[color as keyof typeof theme.colors] || color};
`;
