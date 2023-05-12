import { HTMLAttributes } from "react";
import theme from "../../../theme/themeProvider";

export interface IconProps extends HTMLAttributes<SVGElement> {
  name: "location" | "street";
  size?: number;
  color?: keyof typeof theme.colors | string;
}
