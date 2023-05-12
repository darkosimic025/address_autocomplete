import styled from "styled-components";
import { HeaderProps } from "./Header.types";

export const StyledHeader = styled.header<Omit<HeaderProps, "size">>`
  ${({ color }) => color && `color: ${color};`}
`;
