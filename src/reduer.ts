import { EventType } from "./context";

export enum EventActionKind {
  ADDEVENT = "ADD_EVENT",
  DELETEEVENT = "DELETE_EVENT",
  EDITEVENT = "EDIT_EVENT",
}

export interface IEvent {
  type: EventActionKind;
  payload: EventType;
}
const initialState = {};

export const initializer = (initialValue = initialState) =>
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("localEvents") || "{}");

export const eventReducer = (state: any[], action: IEvent) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_EVENT":
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          description: payload.description,
          eventDate: payload.eventDate,
          createdAt: payload.createdAt,
        },
      ];
    case "EDIT_EVENT":
      const { title, description, createdAt, id, eventDate, updatedAt } =
        payload;
      return state.map((event) =>
        event.id === id
          ? {
              ...event,
              title,
              description,
              createdAt,
              id,
              eventDate,
              updatedAt,
            }
          : event
      );
    case "DELETE_EVENT":
      return [...state.filter((event) => event.id !== payload.id)];
    default:
      return state;
  }
};

export default eventReducer;
