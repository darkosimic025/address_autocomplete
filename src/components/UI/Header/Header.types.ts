import { ReactNode } from "react";

export interface HeaderProps {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  children: ReactNode;
}
