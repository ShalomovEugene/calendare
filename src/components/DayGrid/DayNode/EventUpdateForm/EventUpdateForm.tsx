import { useCalendarContext } from "@/context";
import { EventActionKind } from "@/reduer";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";

import {
  ButtonSave,
  DateTime,
  EventDesc,
  EventUpdateFormWrapp,
  EventHeader,
  EventTitle,
  CreatedAt,
} from "./EventUpdateForm.styles";
import { IEvenUpdatetForm } from "./EventForm.props";

const EventUpdateForm = ({
  createdAt,
  description,
  title,
  id,
  setIsEditForm,
  isEditForm,
  updatedAt,
}: IEvenUpdatetForm) => {
  const { stateEvent, dispatchEvent } = useCalendarContext();
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const { isDate, setIsDate } = useCalendarContext();
  const [datetimeLocal, setDatetimeLocal] = useState<string>(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  });
  const [isDisabledForm, setIsDisabledForm] = useState<boolean>(true);

  useEffect(() => {
    setDatetimeLocal(() => {
      const currentDate = isDate;
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const day = currentDate.getDate().toString().padStart(2, "0");
      const hours = currentDate.getHours().toString().padStart(2, "0");
      const minutes = currentDate.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    });
    setTitleValue(title);
    setDescriptionValue(description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDate]);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
    if (event.target.value.length) {
      setIsDisabledForm(false);
    } else {
      setIsDisabledForm(true);
    }
  };

  const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(event.target.value);
    setIsDisabledForm(false);
  };

  const editEvent = () => {
    dispatchEvent({
      type: EventActionKind.EDITEVENT,
      payload: {
        title: titleValue,
        id: id,
        description: descriptionValue,
        eventDate: new Date(datetimeLocal),
        createdAt: new Date(),
        updatedAt: true,
      },
    });

    setTitleValue("");
    setDescriptionValue("");
    setIsDisabledForm(true);
    setIsEditForm(false);
  };

  const deleteEvent = () => {
    dispatchEvent({
      type: EventActionKind.DELETEEVENT,
      payload: {
        id: id,
      },
    });
    setTitleValue("");
    setDescriptionValue("");
    setIsDisabledForm(true);
    setIsEditForm(false);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      try {
        setDatetimeLocal(e.target.value);
        setIsDate(new Date(e.target.value));
      } catch (ex) {
        console.log("cath clear datapicker");
      }
      setIsDisabledForm(false);
    }
  };

  const toggleForm = (): void => {
    setIsEditForm(!isEditForm);
  };
  const changeFormatCreatedAt = () => {
    if (updatedAt) {
      return `Updated at: ${new Date(createdAt).toLocaleString("default")}`;
    }
    return `Created at: ${new Date(createdAt).toLocaleString("default")}`;
  };

  return (
    <EventUpdateFormWrapp>
      <form>
        <EventHeader>
          <h4>Edit idea item</h4>
          <Button type="button" onClick={toggleForm} text="&#x2715;" />
        </EventHeader>
        <CreatedAt>{changeFormatCreatedAt()}</CreatedAt>
        <EventTitle>
          <label>title</label>
          <input
            type="text"
            placeholder="Title goes here"
            value={titleValue}
            onChange={(e) => handleChangeTitle(e)}
            required
          />
        </EventTitle>
        <EventDesc>
          <textarea
            placeholder="Description"
            value={descriptionValue}
            onChange={(e) => handleChangeDesc(e)}
            rows={5}
          ></textarea>
        </EventDesc>

        <DateTime>
          <input
            type="datetime-local"
            value={datetimeLocal}
            onChange={handleChangeDate}
          />
        </DateTime>
        <ButtonSave>
          <Button
            type="button"
            disabled={isDisabledForm}
            className={isDisabledForm ? "disabled" : ""}
            onClick={editEvent}
            text="Save"
          />
          <Button
            type="button"
            className="deleteEvent"
            onClick={deleteEvent}
            text="Delete event"
          />
        </ButtonSave>
      </form>
    </EventUpdateFormWrapp>
  );
};

export default EventUpdateForm;
