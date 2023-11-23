"use client";
import DayGrid from "@/components/DayGrid";
import { useCalendarContext } from "@/context";
import { useEffect, useState } from "react";
import { ContentWrapp } from "./Page.styles";

const Home = () => {
  const { isDate, setIsDate } = useCalendarContext();
  let title = isDate.toLocaleString("default", { month: "long" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <ContentWrapp>
      <h1>{isClient ? title : "Loading..."}</h1>
      <div>
        <DayGrid />
      </div>
    </ContentWrapp>
  );
};
export default Home;
