import { useCalendarContext } from "@/context";
import { FC, useEffect, useState } from "react";
import { IDayGrid } from "./DayGrid.props";
import { DayNodeWrapp } from "./DayGrid.styles";
import DayNode from "./DayNode/DayNode";

const DayGrid: FC<IDayGrid> = (): JSX.Element => {
  return <CreateDayNode />;
};

export default DayGrid;

const CreateDayNode = () => {
  const { isDate, setIsDate } = useCalendarContext();
  const [isDays, setIsDays] = useState<number>(0);
  const [isCurrentMotn, setIsCurrentMonth] = useState<number>(
    isDate.getMonth()
  );
  const [isCurrentDay, setIsCurrentDay] = useState<number>(isDate.getDate());
  const { stateEvent, dispatchEvent } = useCalendarContext();

  const getDaysInMonth = () => {
    return new Date(isDate.getFullYear(), isDate.getMonth() + 1, 0).getDate();
  };

  useEffect(() => {
    setIsDays(getDaysInMonth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateEvent, isDate]);

  const SetDayNodes = () => {
    let daysArr: JSX.Element[] = [];

    for (let i: number = 0; i < isDays; i++) {
      let dayName: Date = new Date(
        isDate.getFullYear(),
        isDate.getMonth(),
        i + 1
      );

      daysArr.push(
        <DayNode
          key={i}
          className={
            i + 1 === isCurrentDay && isCurrentMotn === isDate.getMonth()
              ? "active"
              : ""
          }
          date={dayName}
        />
      );
    }
    return daysArr;
  };

  return <DayNodeWrapp>{SetDayNodes()}</DayNodeWrapp>;
};
