import React from "react";
import { IconProps } from "./Icon.types";
import { StyledIcon } from "./Icon.styled";

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  const iconPaths = {
    location:
      "M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z",
    street:
      "M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z",
  };

  const path = iconPaths[name];

  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 560"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d={path} />
    </StyledIcon>
  );
};

export default Icon;
