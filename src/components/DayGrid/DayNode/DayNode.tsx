import { useCalendarContext } from "@/context";
import { FC } from "react";
import DayEvent from "./DayEvent/DayEvent";
import { IDayNode } from "./DayNode.props";
import { DayNodeItem } from "./DayNode.styles";

const DayNode: FC<IDayNode> = ({ date, className }): JSX.Element => {
  const { stateEvent, dispatchEvent } = useCalendarContext();

  const currentDate: Date = new Date(date);
  const startDate: Date = new Date(currentDate.getTime());
  const endDate: Date = new Date(currentDate.getTime());
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const eventList =
    stateEvent.events &&
    stateEvent.events.filter((event) => {
      return (
        startDate < new Date(event.eventDate) &&
        endDate > new Date(event.eventDate)
      );
    });

  return (
    <DayNodeItem className={className}>
      {stateEvent.events &&
      stateEvent.events.length !== 0 &&
      stateEvent.events ? (
        <>
          <h3>{date.getDate()}</h3>
          <h4>{date.toLocaleDateString("default", { weekday: "long" })}</h4>
          {eventList.map((eventItem) => (
            <DayEvent
              key={eventItem.id}
              title={eventItem.title}
              description={eventItem.description}
              eventDate={eventItem.eventDate}
              id={eventItem.id}
              createdAt={eventItem.createdAt}
              updatedAt={eventItem.updatedAt}
            />
          ))}
        </>
      ) : (
        <>
          <h3>{date.getDate()}</h3>
          <h4>{date.toLocaleDateString("default", { weekday: "long" })}</h4>
        </>
      )}
    </DayNodeItem>
  );
};

export default DayNode;
