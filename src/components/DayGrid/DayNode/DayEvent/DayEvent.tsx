import { useCalendarContext } from "@/context";
import { FC, useEffect, useState } from "react";
import EventUpdateForm from "../EventUpdateForm/EventUpdateForm";
import { IDayEvent } from "./DayEvent.props";
import { DayEventWrapp } from "./DayEvent.styles";

const DayEvent: FC<IDayEvent> = ({
  title,
  description,
  eventDate,
  createdAt,
  id,
  updatedAt,
}): JSX.Element => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const startAt = () => {
    return `The event starts at: ${
      (new Date(eventDate).getHours() < 10 ? "0" : "") +
      new Date(eventDate).getHours()
    }:${
      (new Date(eventDate).getMinutes() < 10 ? "0" : "") +
      new Date(eventDate).getMinutes()
    }`;
  };

  const toggleEvenUpdateForm = () => {
    setIsEditForm(!isEditForm);
  };

  return (
    <DayEventWrapp>
      <div onClick={toggleEvenUpdateForm}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="startsAt">{startAt()}</div>
      </div>

      {isEditForm && (
        <EventUpdateForm
          title={title}
          description={description}
          eventDate={eventDate}
          createdAt={createdAt}
          id={id}
          setIsEditForm={setIsEditForm}
          isEditForm={isEditForm}
          updatedAt={updatedAt}
        />
      )}
    </DayEventWrapp>
  );
};

export default DayEvent;
