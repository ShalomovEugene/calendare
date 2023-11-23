import { createContext, useContext } from "react";
import eventReducer, { IEvent } from "./reduer";

export type ContextTypeDate = {
  isDate: Date;
  setIsDate: (isDate: Date) => void;
};

export type ContextTypeEventForm = {
  isToggleForm: boolean;
  setIsToggleForm: (isToggleForm: boolean) => void;
};

export type EventType = {
  id: number;
  title: string;
  description: string;
  eventDate: Date;
  createdAt: Date;
  updatedAt: boolean;
};

export type InitialStateEventType = {
  events: EventType[];
};

export type ContextTypeEvent = {
  stateEvent: InitialStateEventType;
  dispatchEvent: React.Dispatch<any>;
};

export const ContextCalendar = createContext<
  (ContextTypeDate & ContextTypeEventForm & ContextTypeEvent) | null
>(null);

export const mainEventReducer = (
  { events = [] }: InitialStateEventType,
  action: IEvent
) => ({
  events: eventReducer(events, action),
});

export const useCalendarContext = () => {
  const context = useContext(ContextCalendar);

  if (!context) {
    throw new Error(
      "useCalendarContext must be used inside the CalendarProvider"
    );
  }

  return context;
};
