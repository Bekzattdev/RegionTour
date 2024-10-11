import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | Date[]>(new Date());

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default MyCalendar;
