"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | [Date, Date] | null>(new Date());

  const handleDayClick = (
    value: Date,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDate(value);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Calendar onClickDay={handleDayClick} value={date} />
    </div>
  );
};

export default MyCalendar;
