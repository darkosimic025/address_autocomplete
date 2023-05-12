import React from "react";
import { StyledHeader } from "./Header.styled";
import { HeaderProps } from "./Header.types";

const Header: React.FC<HeaderProps> = ({ size, color, children }) => {
  const HeaderTag = size as keyof JSX.IntrinsicElements;

  return (
    <StyledHeader as={HeaderTag} color={color}>
      {children}
    </StyledHeader>
  );
};

export default Header;
