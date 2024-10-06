import React from "react";
import scss from "./RoutesPage.module.scss";
import MyCalendar from "./calendSection/Calendar";

const RoutesPage = () => {
  return (
    <div className={scss.RoutesPage}>
      <div className={scss.content}>
        <div>Regions</div>
        <div>
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
