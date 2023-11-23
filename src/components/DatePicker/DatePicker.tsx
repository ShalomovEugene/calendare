import { useCalendarContext } from "@/context";
import { FC, useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { IDatePicker } from "./DatePicker.props";
import { CalendarlWrapp, DatePickerWrapp } from "./DatePicker.styles";

const DatePicker: FC<IDatePicker> = (): JSX.Element => {
  const { isDate, setIsDate } = useCalendarContext();

  const [date, setDate] = useState<string>(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}`;
  });

  const ref = useRef<HTMLInputElement>(null);

  const handleStepDown = () => {
    if (typeof ref.current?.stepDown === "function") {
      try {
        ref.current?.stepDown();
        setDate(ref.current?.value);
        if (ref.current?.value) {
          setIsDate(new Date(ref.current?.value));
        }
      } catch (ex) {
        const currentDate = isDate;
        let year: number = currentDate.getFullYear();
        let month: string | number = currentDate
          .getMonth()
          .toString()
          .padStart(2, "0");

        if (+month < 1) {
          month = 12;
          year = +year - 1;
        }

        setIsDate(new Date(`${year}-${month}`));
        setDate(`${year}-${month}`);
      }
    }
  };

  const handleStepUp = () => {
    if (typeof ref.current?.stepUp === "function") {
      try {
        ref.current?.stepUp();
        setDate(ref.current?.value);
        if (ref.current?.value) {
          setIsDate(new Date(ref.current?.value));
        }
      } catch (ex) {
        const currentDate = isDate;
        let year: number = currentDate.getFullYear();
        let month: string | number = (currentDate.getMonth() + 2)
          .toString()
          .padStart(2, "0");
        if (+month > 12) {
          month = "01";
          year = +year + 1;
        }

        setIsDate(new Date(`${year}-${month}`));
        setDate(`${year}-${month}`);
      }
    }
  };

  const handleUpdateDate = () => {
    if (typeof ref.current?.stepUp === "number") {
      try {
        if (ref.current?.value) {
          setDate(ref.current?.value);
          setIsDate(new Date(ref.current?.value));
        }
      } catch (ex) {
        console.log("cath stepUp");
      }
    }
  };

  useEffect(() => {
    setDate(() => {
      const currentDate = isDate;
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      return `${year}-${month}`;
    });
  }, [isDate]);

  return (
    <DatePickerWrapp>
      <Button type="button" onClick={handleStepDown} text="&#60;" />
      <CalendarlWrapp>
        <input
          type="month"
          value={date}
          onChange={handleUpdateDate}
          ref={ref}
          step={1}
        />
      </CalendarlWrapp>
      <Button type="button" onClick={handleStepUp} text="&#62;" />
    </DatePickerWrapp>
  );
};

export default DatePicker;
