import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IDayNode
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: Date;
}
