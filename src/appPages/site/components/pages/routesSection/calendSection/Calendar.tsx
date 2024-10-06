import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | Date[]>(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date} />
    </>
  );
};

export default MyCalendar;
