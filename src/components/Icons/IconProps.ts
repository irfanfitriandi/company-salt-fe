import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<SVGElement> {
  primary?: string;
  secondary?: string;
}
