import { FC, useState } from "react";
import { Button } from "../Button/Button";
import DatePicker from "@/components/DatePicker";

import { IHeaderProps } from "./Header.props";
import { HeaderWrapp } from "./Header.styles";
import EventForm from "../EventForm/EventForm";
import { useCalendarContext } from "@/context";

const Header: FC = ({}: IHeaderProps) => {
  const { isToggleForm, setIsToggleForm } = useCalendarContext();
  const toggleForm = (): void => {
    setIsToggleForm(!isToggleForm);
  };

  return (
    <HeaderWrapp>
      <Button
        type="button"
        className="addEvent"
        onClick={toggleForm}
        text="+"
      />
      <DatePicker />
      {isToggleForm && <EventForm />}
    </HeaderWrapp>
  );
};

export default Header;
