import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IDayEvent {
  id: number;
  title: string;
  description: string;
  eventDate: Date;
  createdAt: Date;
  updatedAt: boolean;
}
